package com.carrental.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.carrental.backend.model.Booking;

public interface BookingRepository extends JpaRepository<Booking, Long> {

    List<Booking> findByStatusIgnoreCase(String status);

    List<Booking> findByCustomerNameContainingIgnoreCase(String customerName);

    List<Booking> findByCarId(Long carId);
}