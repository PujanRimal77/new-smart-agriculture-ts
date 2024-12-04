
// tests/farmer.test.ts

import { Farmer } from '../entities/Farmer';

describe('Farmer Class', () => {
    let farmer: Farmer;

    beforeEach(() => {
        // Set up a new instance of Farmer before each test
        farmer = new Farmer(1, 'John Doe', 'Farm A');
    });

    test('should create a Farmer instance with the correct properties', () => {
        expect(farmer.farmerID).toBe(1);
        expect(farmer.name).toBe('John Doe');
        expect(farmer.farmLocation).toBe('Farm A');
    });

    test('viewCropData should log the correct message', () => {
        console.log = jest.fn(); // Mock console.log
        farmer.viewCropData();
        expect(console.log).toHaveBeenCalledWith('Farmer John Doe is viewing crop data for farm at Farm A');
    });

    test('receiveAlerts should log the correct message', () => {
        console.log = jest.fn(); // Mock console.log
        farmer.receiveAlerts();
        expect(console.log).toHaveBeenCalledWith('Farmer John Doe has received an alert!');
    });

    test('adjustIrrigation should log the correct message', () => {
        console.log = jest.fn(); // Mock console.log
        farmer.adjustIrrigation();
        expect(console.log).toHaveBeenCalledWith('Farmer John Doe is adjusting irrigation for the farm.');
    });
});
export { Farmer };
