// carApiDealer2.ts

import { Car } from "./car";
import { CarAPI } from "./carAPI";

export class CarApiDealer2 implements CarAPI {
  private cars: Car[] = [
    { id: 10, brand: "Tesla", model: "Model 3", year: 2022 },
    { id: 11, brand: "Mercedes", model: "S-Klasse", year: 2021 },
    { id: 12, brand: "Porsche", model: "911", year: 2017 },
  ];

  getAllCars(): Car[] {
    return this.cars;
  }

  findCars(searchText: string): Car[] {
    const lower = searchText.toLowerCase();

    return this.cars.filter(
      (car) =>
        car.brand.toLowerCase().includes(lower) ||
        car.model.toLowerCase().includes(lower)
    );
  }
}
