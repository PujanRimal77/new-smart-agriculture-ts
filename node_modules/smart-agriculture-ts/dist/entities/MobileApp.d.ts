export declare class MobileApp {
    private appVersion;
    private userID;
    constructor(appVersion: string, userID: number);
    displayDashboard(): void;
    sendCommands(): void;
    receiveNotifications(): void;
    getAppInfo(): {
        version: string;
        userID: number;
    };
}
