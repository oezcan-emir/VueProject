
import { CarAPI } from "./carAPI";

export class CarController {
  private api: CarAPI;

  constructor(api: CarAPI) {
    this.api = api;
  }

  showAllCars(): void {
    const cars = this.api.getAllCars();
    console.log("Alle Autos:", cars);
  }

  searchAndShowCars(searchText: string): void {
    const found = this.api.findCars(searchText);
    console.log(`Gefundene Autos für "${searchText}":`, found);
  }
}
