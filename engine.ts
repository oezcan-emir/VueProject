export class engine {
    private zylinderAnzahl: number;
    private motorArt: string; 
    private aufladungsArt: string; 

    constructor(zylinderAnzahl: number, motorArt: string, aufladungsArt: string) {
        this.zylinderAnzahl = zylinderAnzahl;
        this.motorArt = motorArt;
        this.aufladungsArt = aufladungsArt;
    }

    public getZylinderAnzahl(): number {
        return this.zylinderAnzahl;
    }

    public getMotorArt(): string {
        return this.motorArt;
    }

    public getAufladungsArt(): string {
        return this.aufladungsArt;
    }

    public setZylinderAnzahl(zylinderAnzahl: number) {
        this.zylinderAnzahl = zylinderAnzahl;
    }

    public setMotorArt(motorArt: string) {
        this.motorArt = motorArt;
    }

    public setAufladungsArt(aufladungsArt: string) {
        this.aufladungsArt = aufladungsArt;
    }
}
