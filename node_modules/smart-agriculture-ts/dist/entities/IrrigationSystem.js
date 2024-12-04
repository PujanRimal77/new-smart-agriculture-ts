"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IrrigationSystem = void 0;
class IrrigationSystem {
    constructor(systemID) {
        this.systemID = systemID;
        this.waterFlow = 0;
    }
    adjustWater(flowRate) {
        this.waterFlow = flowRate;
        console.log(`Irrigation system ${this.systemID} adjusted water flow to ${this.waterFlow} L/min`);
    }
    reportStatus() {
        console.log(`Irrigation system ${this.systemID} is reporting current water flow: ${this.waterFlow} L/min`);
    }
}
exports.IrrigationSystem = IrrigationSystem;
//# sourceMappingURL=IrrigationSystem.js.map