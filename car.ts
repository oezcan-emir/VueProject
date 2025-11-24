import { engine } from "./engine";  

export class car {
    private brand: string;
    private Horsepower: number = 0;
    private motor: engine;        

    constructor(brand: string, Horsepower: number, motor: engine) {   
        this.setandCheckHorsepower(Horsepower);
        this.brand = brand;
        this.motor = motor;
    }

    public getHorsepower(): number {
        return this.Horsepower;
    }

    public setHorsepower(Horsepower: number) {
        this.setandCheckHorsepower(Horsepower);
    }

    private setandCheckHorsepower(Horsepower: number) {
        if (Horsepower > 50) {
            this.Horsepower = 150;
        } else {
            this.Horsepower = Horsepower;
        }
    }

 
    public getMotor(): engine {
        return this.motor;
    }
}
