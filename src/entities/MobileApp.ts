export class MobileApp {
    constructor(
        private appVersion: string,
        private userID: number
    ) {}

    displayDashboard(): void {
        console.log(`Displaying dashboard for user ${this.userID} (App version: ${this.appVersion})`);
    }

    sendCommands(): void {
        console.log(`Sending commands to edge devices for user ${this.userID}...`);
    }

    receiveNotifications(): void {
        console.log(`Receiving notifications for user ${this.userID}...`);
    }

    getAppInfo(): { version: string; userID: number } {
        return {
            version: this.appVersion,
            userID: this.userID
        };
    }
}
