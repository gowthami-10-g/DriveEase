package com.carrental.backend;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.carrental.backend.model.Car;
import com.carrental.backend.repository.CarRepository;

@Component
public class DataLoader implements CommandLineRunner {

    private final CarRepository carRepository;

    public DataLoader(CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    @Override
    public void run(String... args) {

        // Add demo cars only when the database is empty
        if (carRepository.count() == 0) {

            carRepository.save(new Car(
                    "BMW",
                    "3 Series",
                    "Luxury",
                    "Petrol",
                    "Automatic",
                    5,
                    5500.0,
                    "https://images.unsplash.com/photo-1555215695-3004980ad54e",
                    true
            ));

            carRepository.save(new Car(
                    "Mercedes-Benz",
                    "C-Class",
                    "Luxury",
                    "Petrol",
                    "Automatic",
                    5,
                    6500.0,
                    "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8",
                    true
            ));

            carRepository.save(new Car(
                    "Audi",
                    "A4",
                    "Luxury",
                    "Petrol",
                    "Automatic",
                    5,
                    6000.0,
                    "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6",
                    true
            ));

            carRepository.save(new Car(
                    "Toyota",
                    "Fortuner",
                    "SUV",
                    "Diesel",
                    "Automatic",
                    7,
                    5000.0,
                    "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b",
                    true
            ));

            carRepository.save(new Car(
                    "Mahindra",
                    "Thar",
                    "SUV",
                    "Diesel",
                    "Manual",
                    4,
                    3500.0,
                    "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
                    true
            ));

            carRepository.save(new Car(
                    "Hyundai",
                    "Creta",
                    "SUV",
                    "Petrol",
                    "Automatic",
                    5,
                    2800.0,
                    "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2",
                    true
            ));

            carRepository.save(new Car(
                    "Tata",
                    "Nexon EV",
                    "Electric",
                    "Electric",
                    "Automatic",
                    5,
                    3200.0,
                    "https://images.unsplash.com/photo-1593941707882-a5bba14938c7",
                    true
            ));

            carRepository.save(new Car(
                    "Kia",
                    "Seltos",
                    "SUV",
                    "Petrol",
                    "Automatic",
                    5,
                    3000.0,
                    "https://images.unsplash.com/photo-1494976388531-d1058494cdd8",
                    true
            ));

            System.out.println("========================================");
            System.out.println("  8 DEMO CARS ADDED SUCCESSFULLY!");
            System.out.println("========================================");
        }
    }
}