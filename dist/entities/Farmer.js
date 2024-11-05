"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Farmer = void 0;
class Farmer {
    constructor(farmerID, name, farmLocation) {
        this.farmerID = farmerID;
        this.name = name;
        this.farmLocation = farmLocation;
    }
    viewCropData() {
        console.log(`Farmer ${this.name} is viewing crop data for farm at ${this.farmLocation}`);
    }
    receiveAlerts() {
        console.log(`Farmer ${this.name} has received an alert!`);
    }
    adjustIrrigation() {
        console.log(`Farmer ${this.name} is adjusting irrigation for the farm.`);
    }
}
exports.Farmer = Farmer;
//# sourceMappingURL=Farmer.js.map