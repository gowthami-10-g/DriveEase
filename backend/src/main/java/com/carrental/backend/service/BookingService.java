package com.carrental.backend.service;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.List;

import org.springframework.stereotype.Service;

import com.carrental.backend.model.Booking;
import com.carrental.backend.model.Car;
import com.carrental.backend.repository.BookingRepository;
import com.carrental.backend.repository.CarRepository;

@Service
public class BookingService {

    private final BookingRepository bookingRepository;
    private final CarRepository carRepository;

    public BookingService(
            BookingRepository bookingRepository,
            CarRepository carRepository
    ) {
        this.bookingRepository = bookingRepository;
        this.carRepository = carRepository;
    }

    public Booking createBooking(Booking booking) {

        // 1. Validate that a car was selected
        if (booking.getCarId() == null) {
            throw new IllegalArgumentException(
                    "Please select a car before booking."
            );
        }

        // 2. Find the selected car in MySQL
        Car car = carRepository.findById(booking.getCarId())
                .orElseThrow(() -> new IllegalArgumentException(
                        "Car not found with ID: " + booking.getCarId()
                ));

        // 3. Validate booking dates
        LocalDate pickupDate = booking.getPickupDate();
        LocalDate returnDate = booking.getReturnDate();

        if (pickupDate == null || returnDate == null) {
            throw new IllegalArgumentException(
                    "Pickup date and return date are required."
            );
        }

        if (returnDate.isBefore(pickupDate)) {
            throw new IllegalArgumentException(
                    "Return date cannot be before pickup date."
            );
        }

        // 4. Calculate rental duration
        long days = ChronoUnit.DAYS.between(
                pickupDate,
                returnDate
        );

        // Same-day booking is counted as 1 day
        int rentalDays = (int) Math.max(1, days);

        // 5. Calculate total price on backend
        double totalPrice = rentalDays * car.getPricePerDay();

        // 6. Add trusted car information
        booking.setCarName(
                car.getBrand() + " " + car.getModel()
        );

        booking.setRentalDays(rentalDays);
        booking.setTotalPrice(totalPrice);
        booking.setStatus("CONFIRMED");

        // 7. Save permanently in MySQL
        return bookingRepository.save(booking);
    }

    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    public Booking getBookingById(Long id) {
        return bookingRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException(
                        "Booking not found with ID: " + id
                ));
    }

    public List<Booking> getBookingsByStatus(String status) {
        return bookingRepository.findByStatusIgnoreCase(status);
    }

    public List<Booking> searchBookingsByCustomer(String customerName) {
        return bookingRepository
                .findByCustomerNameContainingIgnoreCase(customerName);
    }

    public void deleteBooking(Long id) {

        if (!bookingRepository.existsById(id)) {
            throw new IllegalArgumentException(
                    "Booking not found with ID: " + id
            );
        }

        bookingRepository.deleteById(id);
    }
}