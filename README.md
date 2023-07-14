```markdown
# Weather Application

The Weather Application is a web application that allows users to retrieve weather information for cities in the USA.

## Features

- Add cities to the weather list
- Display temperature and humidity for each city
- Remove cities from the weather list
- Dynamically update background images based on temperature

## Technologies Used

- Front-end: Angular
- Back-end: Spring Boot
- API: OpenWeatherMap

## Getting Started

To run the Weather Application locally, follow these steps:

### Prerequisites

- Node.js and npm should be installed on your machine.
- Java 17 and Maven should be installed on your machine.

### Front-end Setup

1. Install Node.js and npm:
   - Visit the official Node.js website: https://nodejs.org
   - Download the appropriate installer for your operating system.
   - Run the installer and follow the installation instructions.

2. Clone the repository from GitHub:
   ```
   git clone https://github.com/vineetbattula/wells-fargo-assessment.git
   ```

3. Navigate to the `WeatherApp` directory:
   ```
   cd wells-fargo-assessment/WeatherApp
   ```

4. Install the required dependencies:
   ```
   npm install
   ```

5. Start the Angular development server:
   ```
   ng serve
   ```

6. Open your browser and visit http://localhost:4200 to access the Weather Application.

### Back-end Setup

1. Install Java 17 and Maven:
   - Visit the official Java website: https://www.oracle.com/java/technologies/javase-jdk17-downloads.html
   - Download and install the appropriate JDK (Java Development Kit) for your operating system.
   - Visit the official Maven website: https://maven.apache.org
   - Download the latest version of Maven and follow the installation instructions.

2. Clone the repository from GitHub:
   ```
   git clone https://github.com/vineetbattula/wells-fargo-assessment.git
   ```

3. Navigate to the `weather-application` directory:
   ```
   cd wells-fargo-assessment/weather-application
   ```

4. Import the project into your favorite Java IDE.

5. Update the API key:
   - Open the `application.properties` file.
   - Replace the placeholder value with your own API key:
     ```
     api.key=YOUR_API_KEY
     ```

6. Build the project using Maven:
   ```
   mvn clean install
   ```

7. Run the Spring Boot application:
   ```
   mvn spring-boot:run
   ```

8. The backend server should now be running on http://localhost:8080.

## Contributions

Contributions to the Weather Application are welcome! If you find any issues or want to enhance the functionality, feel free to create a pull request.

9. Video Demo

https://drive.google.com/file/d/1ZY74eMvwDwdUsUERVYUYKeZEIxU_1okT/view?usp=sharing


```
