export class Sensor {
    sensorID: number;
    type: string;
    current: number;

    constructor(sensorID: number, type: string) {
        this.sensorID = sensorID;
        this.type = type;
        this.current = 0;
    }

    measureEnvironment(): void {
        console.log(`Sensor ${this.sensorID} is measuring ${this.type}`);
        this.current = Math.random() * 100;  // Simulate measurement
    }

    transmitData(): void {
        console.log(`Transmitting data from sensor ${this.sensorID}: ${this.current}`);
    }

    calibrate(): void {
        console.log(`Calibrating sensor ${this.sensorID}`);
    }
}

// updated sensor