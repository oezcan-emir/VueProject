
import { Car } from "./car";
import { CarAPI } from "./carAPI";

export class CarApiDealer1 implements CarAPI {
  private cars: Car[] = [
    { id: 1, brand: "BMW", model: "3er", year: 2020 },
    { id: 2, brand: "Audi", model: "A6", year: 2019 },
    { id: 3, brand: "VW", model: "Golf", year: 2018 },
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
