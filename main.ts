import { car } from "./car";
import { engine } from "./engine";

// Motor erstellen
const motor1 = new engine(6, "V-Motor", "Turboaufgeladen");

// Auto mit Motor erstellen
const bmw = new car("BMW", 120, motor1);

console.log("Marke:", "BMW");
console.log("PS:", bmw.getHorsepower());

// Zugriff auf Motor-Daten über das Auto
const motor = bmw.getMotor();
console.log("Zylinder:", motor.getZylinderAnzahl());
console.log("Motorart:", motor.getMotorArt());
console.log("Aufladung:", motor.getAufladungsArt());
