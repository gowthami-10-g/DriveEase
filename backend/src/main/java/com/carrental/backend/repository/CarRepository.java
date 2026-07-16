package com.carrental.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.carrental.backend.model.Car;

public interface CarRepository extends JpaRepository<Car, Long> {

    List<Car> findByAvailableTrue();

    List<Car> findByCategoryIgnoreCase(String category);

    List<Car> findByBrandContainingIgnoreCase(String brand);
}