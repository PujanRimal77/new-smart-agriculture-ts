"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sensor = void 0;
class Sensor {
    constructor(sensorID, type) {
        this.sensorID = sensorID;
        this.type = type;
        this.current = 0;
    }
    measureEnvironment() {
        console.log(`Sensor ${this.sensorID} is measuring ${this.type}`);
        this.current = Math.random() * 100; // Simulate measurement
    }
    transmitData() {
        console.log(`Transmitting data from sensor ${this.sensorID}: ${this.current}`);
    }
    calibrate() {
        console.log(`Calibrating sensor ${this.sensorID}`);
    }
}
exports.Sensor = Sensor;
//# sourceMappingURL=Sensor.js.map