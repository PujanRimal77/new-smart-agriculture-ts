export declare class Sensor {
    sensorID: number;
    type: string;
    current: number;
    constructor(sensorID: number, type: string);
    measureEnvironment(): void;
    transmitData(): void;
    calibrate(): void;
}
