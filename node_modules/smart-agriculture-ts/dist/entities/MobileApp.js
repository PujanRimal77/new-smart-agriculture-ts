"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileApp = void 0;
class MobileApp {
    constructor(appVersion, userID) {
        this.appVersion = appVersion;
        this.userID = userID;
    }
    displayDashboard() {
        console.log(`Displaying dashboard for user ${this.userID} (App version: ${this.appVersion})`);
    }
    sendCommands() {
        console.log(`Sending commands to edge devices for user ${this.userID}...`);
    }
    receiveNotifications() {
        console.log(`Receiving notifications for user ${this.userID}...`);
    }
    getAppInfo() {
        return {
            version: this.appVersion,
            userID: this.userID
        };
    }
}
exports.MobileApp = MobileApp;
//# sourceMappingURL=MobileApp.js.map