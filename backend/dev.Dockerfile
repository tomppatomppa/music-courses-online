# Stage 1: Build the Spring Boot application with Maven
FROM eclipse-temurin:17-jdk-alpine AS builder

WORKDIR /usr/src/app

COPY .mvn/ .mvn
COPY mvnw pom.xml ./
COPY ./src ./src

RUN ./mvnw clean install

# Stage 2: Create the final Docker image
FROM eclipse-temurin:17-jdk-alpine

WORKDIR /usr/src/app

EXPOSE 8080

# Copy the JAR file from the builder stage
COPY --from=builder /usr/src/app/target/*.jar /usr/src/app/backend-0.0.1-SNAPSHOT.jar


RUN if [ ! -f /usr/src/app/backend-0.0.1-SNAPSHOT.jar ]; then echo "JAR file not found"; exit 1; fi

ENTRYPOINT ["java", "-jar", "backend-0.0.1-SNAPSHOT.jar"]