// Comment added to check CI pipelines workflow

export class Farmer {
    farmerID: number;
    name: string;
    farmLocation: string;

    constructor(farmerID: number, name: string, farmLocation: string) {
        this.farmerID = farmerID;
        this.name = name;
        this.farmLocation = farmLocation;
    }

    viewCropData(): void {
        console.log(`Farmer ${this.name} is viewing crop data for farm at ${this.farmLocation}`);
    }

    receiveAlerts(): void {
        console.log(`Farmer ${this.name} has received an alert!`);
    }

    adjustIrrigation(): void {
        console.log(`Farmer ${this.name} is adjusting irrigation for the farm.`);
    }
}
