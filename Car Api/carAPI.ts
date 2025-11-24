import { Car } from './car';

export interface CarAPI {
    getAllCars(): Car[];
    findCars(searchtext: string): Car[];
}