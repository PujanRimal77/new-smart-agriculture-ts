[![CI/CD Pipeline](https://github.com/PujanRimal77/new-smart-agriculture-ts/actions/workflows/ci.yml/badge.svg)](https://github.com/PujanRimal77/new-smart-agriculture-ts/actions/workflows/ci.yml)


# Smart Agriculture System

## Overview
This Smart Agriculture System is a TypeScript-based project designed to enhance agricultural productivity through real-time monitoring and automated management of crops. It integrates various technologies including sensors, mobile applications, and automated irrigation systems.

## Unified Process Artifacts Overview

### 1. Use Case Model
The **Smart Agriculture System** use case model identifies primary interactions, capturing the functional requirements of the system:

- **Actors:**
  - **Farmer:** End-user managing crops and irrigation.
  - **Admin:** Responsible for managing system data and user accounts.
  - **Sensor Device:** Collects real-time agricultural data.

- **Primary Use Cases:**
  - **View Crop Data:** Farmers can view real-time data about their crops.
  - **Monitor Soil Moisture:** System displays soil moisture levels from sensors.
  - **Adjust Irrigation:** Farmers can adjust irrigation settings based on data.
  - **Manage User Accounts (Admin):** Admins add, update, or remove user accounts.
  - **Process Sensor Data:** The system processes data collected from sensors and displays it.

### 2. Design Model
The design model includes architectural decisions:
- **Backend:** RESTful APIs for communication with the frontend and sensor devices.
- **Database:** Mongodb database for storing sensor data and user information.
- **Frontend:** Web-based dashboard for farmers to interact with the system.

### 3. Implementation Artifacts
- **Code Modules:** Divided into user-facing components, service APIs, and utility functions.
- **Test Scripts:** Ensure use case functionalities are robust and bug-free.

### 4. Deployment Model
- Hosted on a cloud-based infrastructure like AWS or Azure.
- Integrated with a CI/CD pipeline for regular updates.

---

## Use Cases in Detail

| **Use Case**             | **Actor(s)**       | **Description**                                                                                     |
|---------------------------|--------------------|-----------------------------------------------------------------------------------------------------|
| View Crop Data            | Farmer             | Enables farmers to explore real-time data about their crops.                                       |
| Monitor Soil Moisture     | Farmer             | Displays soil moisture levels collected from sensors in real-time.                                 |
| Adjust Irrigation         | Farmer             | Allows farmers to adjust irrigation settings based on current soil moisture readings.               |
| Manage User Accounts      | Admin              | Admins can create, update, or delete user accounts in the system.                                  |
| Process Sensor Data       | Sensor Device      | Collects and processes data from various sensors to provide insights into crop health.             |


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

To install this package directly from this NPMJS and run, Follow the given below Steps:

```bash

1. Create a new directory :
mkdir folder_name

Change Directory to Current if you are in any:
2. cd folder_name

3.Install the Package Locally :
npm i smart-agriculture-ts

4. Navigate to the package directory:
cd node_modules/smart-agriculture-ts

5. Run the App
node dist/index.js

6. Install dependencies for the jest test
npm install

7.To run the jest test cases:
npm test

```


## Installation through Github

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


## Contributing
Contributions are welcome. Please fork the repository and submit pull requests for any enhancements.

Continuous Improvement
Test results and observations will be continuously updated to improve system reliability and performance.

## License
Copyright © 2024 [Team Dhobikhola]
