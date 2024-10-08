export class IrrigationSystem {
    systemID: number;
    waterFlow: number;

    constructor(systemID: number) {
        this.systemID = systemID;
        this.waterFlow = 0;
    }

    adjustWater(flowRate: number): void {
        this.waterFlow = flowRate;
        console.log(`Irrigation system ${this.systemID} adjusted water flow to ${this.waterFlow} L/min`);
    }

    reportStatus(): void {
        console.log(`Irrigation system ${this.systemID} is reporting current water flow: ${this.waterFlow} L/min`);
    }
}
