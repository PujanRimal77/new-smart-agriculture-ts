export declare class IrrigationSystem {
    systemID: number;
    waterFlow: number;
    constructor(systemID: number);
    adjustWater(flowRate: number): void;
    reportStatus(): void;
}
