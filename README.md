# Smart Agriculture System

## Overview
This Smart Agriculture System is a TypeScript-based project designed to enhance agricultural productivity through real-time monitoring and automated management of crops. It integrates various technologies including sensors, mobile applications, and automated irrigation systems.

## Features
- Real-time crop data monitoring
- Soil moisture sensing
- Automated irrigation control
- Mobile application interface
- Edge computing for local data processing

## Technologies
- TypeScript
- Node.js
- IoT sensors
- Mobile app development (framework specifics to be added)

# Smart Agriculture System

## Copy-Paste Installation

```bash
# Clone Repository
git clone https://github.com/PujanRimal77/new-smart-agriculture-ts.git

# Navigate to Project
cd new-smart-agriculture-ts

# Install Dependencies
npm install

# Compile TypeScript
npx tsc

# Run Application
node dist/index.js

# Run Tests
npm test
```

     
## Usage
- Access the mobile app or web interface to view crop data
- The system automatically adjusts irrigation based on soil moisture readings

## Project Structure
- `src/`: Contains TypeScript source files
- `dist/`: Output directory for compiled JavaScript
- `entities/`: Classes for system components (e.g., MobileApp, Sensors)

## Contributing
Contributions are welcome. Please fork the repository and submit pull requests for any enhancements.


## Contact
[Pujan Rimal] - [Pujanrimal1176@gmail.com]

Project Link: https://github.com/PujanRimal77/new-smart-agriculture-ts.git

Testing
Running Tests
To run the Jest test suite, use the following command:

```bash
 npm test
```

# Test Case Explanations
## EdgeDevice Tests
- **should create an EdgeDevice instance with correct properties**: Verifies correct initialization of EdgeDevice
- **collectSensorData** should log the correct message: Checks sensor data collection logging
- **processLocalData** should log the correct message: Validates local data processing logging
- **sendDataToServer** should log the correct message: Confirms data transmission logging

## Farmer Tests
- **should create a Farmer instance with correct properties**: Ensures correct Farmer object creation
- **viewCropData** should log the correct message: Validates crop data viewing functionality
- **receiveAlerts** should log the correct message: Checks alert reception mechanism
- **adjustIrrigation** should log the correct message: Confirms irrigation adjustment logging

## IrrigationSystem Tests
- **should create an IrrigationSystem instance with correct properties**: Verifies IrrigationSystem initialization
- **adjustWater** should update water flow and log the correct message: Checks water flow adjustment
- **reportStatus** should log the correct message: Validates status reporting

## MobileApp Tests
- **should create a MobileApp instance with correct properties**: Ensures MobileApp object creation
- **displayDashboard** should log the correct message: Checks dashboard display functionality
- **sendCommands** should log the correct message: Validates command sending
- **receiveNotifications** should log the correct message: Confirms notification reception

Test Journaling
Test Run: November 19, 2024

Total Test Suites : 5
Total Test Cases: 19
Passed: 19
Failed: 0
Coverage: 100%


## Traceability Matrix

| Requirement ID | Requirement Description | Feature/Function | Jest Test Case ID | Oracle (Expected Outcome) | Test Status |
|----------------|-------------------------|------------------|-------------------|---------------------------|-------------|
| REQ-001 | Edge device data collection | Edge device collects sensor data | EdgeDevice-001 | Console log of data collection | Passed |
| REQ-002 | Farmer crop data viewing | Farmer can view crop data | Farmer-001 | Console log of farmer viewing data | Passed |
| REQ-003 | Irrigation system control | Adjust water flow in irrigation system | IrrigationSystem-001 | Water flow adjustment logged | Passed |
| REQ-004 | Mobile app dashboard | Display dashboard for user | MobileApp-001 | Console log of dashboard display | Passed |
| REQ-005 | Sensor environment measurement | Measure and transmit sensor data | Sensor-001 | Console log of measurement and transmission | Passed |


- All tests passed successfully.
- Observations:
  - EdgeDevice data collection and transmission working as expected.
  - Farmer interface correctly displays crop data and alerts.
  - IrrigationSystem adjusts water flow accurately based on input.
  - MobileApp successfully displays user-specific information.
  - Sensors accurately measure and transmit environmental data.

  No issues were encountered during this test run. The system demonstrates good integration between components, with each module performing its designated functions correctly.

  ## Usage
- Access the mobile app or web interface to view crop data
- The system automatically adjusts irrigation based on soil moisture readings

## Project Structure
- `src/`: Contains TypeScript source files
- `dist/`: Output directory for compiled JavaScript
- `entities/`: Classes for system components (e.g., MobileApp, Sensors)
- `tests/`: Contains Jest test files

## Contributing
Contributions are welcome. Please fork the repository and submit pull requests for any enhancements.

Continuous Improvement
Test results and observations will be continuously updated to improve system reliability and performance.

## License
Copyright © 2024 [Team Dhobikhola]
