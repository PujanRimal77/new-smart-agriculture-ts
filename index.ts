import { Farmer } from './src/entities/Farmer';
import { MobileApp } from './src/entities/MobileApp';
import { Sensor } from './src/entities/Sensor';
import { IrrigationSystem } from './src/entities/IrrigationSystem';
import { EdgeDevice } from './src/entities/EdgeDevice';

// Creating instances
const farmer = new Farmer(1, "John Doe", "Farm A");
const mobileApp = new MobileApp("v1.0", 1);
const sensor = new Sensor(101, "Soil Moisture");
const irrigationSystem = new IrrigationSystem(202);
const edgeDevice = new EdgeDevice(301, "Field 1");

// Simulating actions
farmer.viewCropData();
sensor.measureEnvironment();
sensor.transmitData();
irrigationSystem.adjustWater(20);
edgeDevice.collectSensorData();
edgeDevice.sendDataToServer();