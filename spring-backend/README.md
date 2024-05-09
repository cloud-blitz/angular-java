# Installation Guide for Spring Backend Application in Ubuntu Instance

This guide provides step-by-step instructions for setting up and running a Spring backend application on Ubuntu.

## Prerequisites
- Ubuntu operating system
- Internet connection

## Instructions

1. **Update apt package index:**

    ```bash
    sudo apt update
    ```

2. **Install OpenJDK 8:**

    ```bash
    sudo apt install openjdk-8-jdk
    ```

3. **Install Maven:**

    ```bash
    sudo apt install maven
    ```

4. **Build the project using Maven:**

    ```bash
    mvn clean package -Dmaven.test.skip=true
    ```

5. **Run the application:**

    ```bash
    java -jar target/spring-backend-v1.jar
    ```

## Notes
- Make sure you have the necessary permissions to execute the commands with `sudo`.
- Ensure that you have the appropriate Java and Maven versions compatible with your Spring application.
- Adjust the file paths and application names as per your project's structure.

Feel free to modify this guide according to your specific requirements.

## Dockerfile
```dockerfile
# Use Ubuntu as base image
FROM ubuntu:latest

# Install dependencies
RUN apt-get update && \
    apt-get install -y openjdk-8-jdk maven && \
    rm -rf /var/lib/apt/lists/*

# Set the working directory in the container
WORKDIR /app

# Copy the Maven project directory into the container
COPY . /app

# Build the Maven project
RUN mvn clean package -Dmaven.test.skip=true

# Expose the port the application runs on
EXPOSE 8080

# Command to run the application
CMD ["java", "-jar", "target/spring-backend-v1.jar"]
```