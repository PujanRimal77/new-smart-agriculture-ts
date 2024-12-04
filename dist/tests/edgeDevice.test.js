"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EdgeDevice_1 = require("../entities/EdgeDevice");
describe('EdgeDevice Class', () => {
    let edgeDevice;
    beforeEach(() => {
        edgeDevice = new EdgeDevice_1.EdgeDevice(301, 'Field 1');
    });
    test('should create an EdgeDevice instance with correct properties', () => {
        expect(edgeDevice.deviceID).toBe(301);
        expect(edgeDevice.location).toBe('Field 1');
        expect(edgeDevice.lastSyncTime).toBeInstanceOf(Date);
    });
    test('collectSensorData should log the correct message', () => {
        console.log = jest.fn(); // Mock console.log
        edgeDevice.collectSensorData();
        expect(console.log).toHaveBeenCalledWith('Edge device 301 collecting data from sensors at Field 1');
    });
    test('processLocalData should log the correct message', () => {
        console.log = jest.fn(); // Mock console.log
        edgeDevice.processLocalData();
        expect(console.log).toHaveBeenCalledWith('Edge device 301 processing local sensor data');
    });
    test('sendDataToServer should log the correct message', () => {
        console.log = jest.fn(); // Mock console.log
        edgeDevice.sendDataToServer();
        expect(console.log).toHaveBeenCalledWith(`Edge device 301 sending data to central server, last synced at ${edgeDevice.lastSyncTime}`);
    });
});
//# sourceMappingURL=edgeDevice.test.js.map