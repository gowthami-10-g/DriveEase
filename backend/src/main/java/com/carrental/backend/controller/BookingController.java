package com.carrental.backend.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.carrental.backend.model.Booking;
import com.carrental.backend.service.BookingService;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin(origins = {
        "http://localhost:5173",
        "http://localhost:5174"
})
public class BookingController {

    private final BookingService bookingService;

    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    // Create and save a new booking
    @PostMapping
    public ResponseEntity<Booking> createBooking(
            @RequestBody Booking booking
    ) {
        Booking savedBooking = bookingService.createBooking(booking);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(savedBooking);
    }

    // Get all bookings
    @GetMapping
    public ResponseEntity<List<Booking>> getAllBookings() {
        return ResponseEntity.ok(
                bookingService.getAllBookings()
        );
    }

    // Get one booking by ID
    @GetMapping("/{id}")
    public ResponseEntity<Booking> getBookingById(
            @PathVariable Long id
    ) {
        return ResponseEntity.ok(
                bookingService.getBookingById(id)
        );
    }

    // Filter bookings by status
    @GetMapping("/status/{status}")
    public ResponseEntity<List<Booking>> getBookingsByStatus(
            @PathVariable String status
    ) {
        return ResponseEntity.ok(
                bookingService.getBookingsByStatus(status)
        );
    }

    // Search bookings by customer name
    @GetMapping("/search")
    public ResponseEntity<List<Booking>> searchBookings(
            @RequestParam String customerName
    ) {
        return ResponseEntity.ok(
                bookingService.searchBookingsByCustomer(customerName)
        );
    }

    // Delete a booking
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBooking(
            @PathVariable Long id
    ) {
        bookingService.deleteBooking(id);

        return ResponseEntity.noContent().build();
    }

    // Handle invalid booking details
    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<String> handleIllegalArgumentException(
            IllegalArgumentException exception
    ) {
        return ResponseEntity
                .badRequest()
                .body(exception.getMessage());
    }
}