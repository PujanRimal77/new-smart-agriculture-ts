export class EdgeDevice {
    deviceID: number;
    location: string;
    lastSyncTime: Date;

    constructor(deviceID: number, location: string) {
        this.deviceID = deviceID;
        this.location = location;
        this.lastSyncTime = new Date();
    }

    collectSensorData(): void {
        console.log(`Edge device ${this.deviceID} collecting data from sensors at ${this.location}`);
    }

    processLocalData(): void {
        console.log(`Edge device ${this.deviceID} processing local sensor data`);
    }

    sendDataToServer(): void {
        this.lastSyncTime = new Date();
        console.log(`Edge device ${this.deviceID} sending data to central server, last synced at ${this.lastSyncTime}`);
    }
}

