"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Farmer_1 = require("./entities/Farmer");
const MobileApp_1 = require("./entities/MobileApp");
const Sensor_1 = require("./entities/Sensor");
const IrrigationSystem_1 = require("./entities/IrrigationSystem");
const EdgeDevice_1 = require("./entities/EdgeDevice");
// Creating instances
const farmer = new Farmer_1.Farmer(1, "John Doe", "Farm A");
const mobileApp = new MobileApp_1.MobileApp("v1.0", 1);
const sensor = new Sensor_1.Sensor(101, "Soil Moisture");
const irrigationSystem = new IrrigationSystem_1.IrrigationSystem(202);
const edgeDevice = new EdgeDevice_1.EdgeDevice(301, "Field 1");
// Simulating actions
farmer.viewCropData();
sensor.measureEnvironment();
sensor.transmitData();
irrigationSystem.adjustWater(20);
edgeDevice.collectSensorData();
edgeDevice.sendDataToServer();
//# sourceMappingURL=index.js.map