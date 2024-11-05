export declare class EdgeDevice {
    deviceID: number;
    location: string;
    lastSyncTime: Date;
    constructor(deviceID: number, location: string);
    collectSensorData(): void;
    processLocalData(): void;
    sendDataToServer(): void;
}
