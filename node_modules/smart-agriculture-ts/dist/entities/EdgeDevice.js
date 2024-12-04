"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EdgeDevice = void 0;
class EdgeDevice {
    constructor(deviceID, location) {
        this.deviceID = deviceID;
        this.location = location;
        this.lastSyncTime = new Date();
    }
    collectSensorData() {
        console.log(`Edge device ${this.deviceID} collecting data from sensors at ${this.location}`);
    }
    processLocalData() {
        console.log(`Edge device ${this.deviceID} processing local sensor data`);
    }
    sendDataToServer() {
        this.lastSyncTime = new Date();
        console.log(`Edge device ${this.deviceID} sending data to central server, last synced at ${this.lastSyncTime}`);
    }
}
exports.EdgeDevice = EdgeDevice;
//# sourceMappingURL=EdgeDevice.js.map