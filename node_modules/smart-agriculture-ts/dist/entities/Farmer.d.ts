export declare class Farmer {
    farmerID: number;
    name: string;
    farmLocation: string;
    constructor(farmerID: number, name: string, farmLocation: string);
    viewCropData(): void;
    receiveAlerts(): void;
    adjustIrrigation(): void;
}
