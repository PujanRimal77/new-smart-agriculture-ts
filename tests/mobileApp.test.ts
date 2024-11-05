import { MobileApp } from '../src/entities/MobileApp';

describe('MobileApp Class', () => {
    let mobileApp: MobileApp;

    beforeEach(() => {
        mobileApp = new MobileApp('v1.0', 1);
    });

    test('should create a MobileApp instance with correct properties', () => {
        expect(mobileApp.getAppInfo()).toEqual({ version: 'v1.0', userID: 1 });
    });

    test('displayDashboard should log the correct message', () => {
        console.log = jest.fn(); // Mock console.log
        mobileApp.displayDashboard();
        expect(console.log).toHaveBeenCalledWith('Displaying dashboard for user 1 (App version: v1.0)');
    });

    test('sendCommands should log the correct message', () => {
        console.log = jest.fn(); // Mock console.log
        mobileApp.sendCommands();
        expect(console.log).toHaveBeenCalledWith('Sending commands to edge devices for user 1...');
    });

    test('receiveNotifications should log the correct message', () => {
        console.log = jest.fn(); // Mock console.log
        mobileApp.receiveNotifications();
        expect(console.log).toHaveBeenCalledWith('Receiving notifications for user 1...');
    });
});
