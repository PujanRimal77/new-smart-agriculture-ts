import { IrrigationSystem } from '../src/entities/IrrigationSystem';

describe('IrrigationSystem Class', () => {
    let irrigationSystem: IrrigationSystem;

    beforeEach(() => {
        irrigationSystem = new IrrigationSystem(202);
    });

    test('should create an IrrigationSystem instance with correct properties', () => {
        expect(irrigationSystem.systemID).toBe(202);
        expect(irrigationSystem.waterFlow).toBe(0);
    });

    test('adjustWater should update water flow and log the correct message', () => {
        console.log = jest.fn(); // Mock console.log
        irrigationSystem.adjustWater(20);
        expect(irrigationSystem.waterFlow).toBe(20);
        expect(console.log).toHaveBeenCalledWith('Irrigation system 202 adjusted water flow to 20 L/min');
    });

    test('reportStatus should log the correct message', () => {
        console.log = jest.fn(); // Mock console.log
        irrigationSystem.reportStatus();
        expect(console.log).toHaveBeenCalledWith('Irrigation system 202 is reporting current water flow: 0 L/min');
    });
});
