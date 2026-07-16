package com.carrental.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.carrental.backend.model.Car;
import com.carrental.backend.repository.CarRepository;

@Service
public class CarService {

    private final CarRepository carRepository;

    public CarService(CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    // Get all cars
    public List<Car> getAllCars() {
        return carRepository.findAll();
    }

    // Get all available cars
    public List<Car> getAvailableCars() {
        return carRepository.findByAvailableTrue();
    }

    // Get a single car by ID
    public Car getCarById(Long id) {
        return carRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Car not found with ID: " + id));
    }

    // Search cars by brand
    public List<Car> searchByBrand(String brand) {
        return carRepository.findByBrandContainingIgnoreCase(brand);
    }

    // Search cars by category
    public List<Car> searchByCategory(String category) {
        return carRepository.findByCategoryIgnoreCase(category);
    }

    // Add a new car
    public Car addCar(Car car) {
        if (car.getAvailable() == null) {
            car.setAvailable(true);
        }

        return carRepository.save(car);
    }

    // Update an existing car
    public Car updateCar(Long id, Car updatedCar) {

        Car existingCar = getCarById(id);

        existingCar.setBrand(updatedCar.getBrand());
        existingCar.setModel(updatedCar.getModel());
        existingCar.setCategory(updatedCar.getCategory());
        existingCar.setFuelType(updatedCar.getFuelType());
        existingCar.setTransmission(updatedCar.getTransmission());
        existingCar.setSeats(updatedCar.getSeats());
        existingCar.setPricePerDay(updatedCar.getPricePerDay());
        existingCar.setImageUrl(updatedCar.getImageUrl());
        existingCar.setAvailable(updatedCar.getAvailable());

        return carRepository.save(existingCar);
    }

    // Delete a car
    public void deleteCar(Long id) {

        if (!carRepository.existsById(id)) {
            throw new RuntimeException(
                    "Cannot delete. Car not found with ID: " + id
            );
        }

        carRepository.deleteById(id);
    }
}