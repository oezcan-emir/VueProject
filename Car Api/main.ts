
import { CarApiDealer1 } from "./carAPIdealer1";
import { CarApiDealer2 } from "./carAPIdealer2";
import { CarController } from "./controller";

const controller1 = new CarController(new CarApiDealer1());
controller1.showAllCars();
controller1.searchAndShowCars("BMW");

const controller2 = new CarController(new CarApiDealer2());
controller2.showAllCars();
controller2.searchAndShowCars("Model");
