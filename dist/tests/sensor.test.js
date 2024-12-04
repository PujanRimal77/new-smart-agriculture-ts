"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sensor_1 = require("../entities/Sensor");
describe('Sensor Class', () => {
    let sensor;
    beforeEach(() => {
        sensor = new Sensor_1.Sensor(101, 'Soil Moisture');
    });
    test('should create a Sensor instance with correct properties', () => {
        expect(sensor.sensorID).toBe(101);
        expect(sensor.type).toBe('Soil Moisture');
        expect(sensor.current).toBe(0);
    });
    test('measureEnvironment should log the correct message and set current', () => {
        console.log = jest.fn(); // Mock console.log
        sensor.measureEnvironment();
        expect(console.log).toHaveBeenCalledWith('Sensor 101 is measuring Soil Moisture');
        expect(sensor.current).toBeGreaterThan(0); // Ensure current is updated
    });
    test('transmitData should log the correct message', () => {
        console.log = jest.fn(); // Mock console.log
        sensor.current = 42; // Set a test value
        sensor.transmitData();
        expect(console.log).toHaveBeenCalledWith('Transmitting data from sensor 101: 42');
    });
    test('calibrate should log the correct message', () => {
        console.log = jest.fn(); // Mock console.log
        sensor.calibrate();
        expect(console.log).toHaveBeenCalledWith('Calibrating sensor 101');
    });
});
//# sourceMappingURL=sensor.test.js.map