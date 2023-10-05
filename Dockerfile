# Stage 1: Build the frontend
FROM node:16-alpine as client

WORKDIR /usr/src/app

ARG VITE_BACKEND_URL
ENV VITE_BACKEND_URL=${VITE_BACKEND_URL}
# Copy frontend source code
COPY frontend/ /usr/src/app/

# Install dependencies and build the frontend
RUN npm ci --omit-dev
RUN npm run build

# build backend
FROM eclipse-temurin:17-jdk-alpine as builder

WORKDIR /usr/src/app

# Copy the backend source code
COPY backend/ /usr/src/app/backend/

# Copy the Maven wrapper and project metadata for the backend
COPY backend/.mvn/ /usr/src/app/.mvn/
COPY backend/mvnw /usr/src/app/mvnw
COPY backend/pom.xml /usr/src/app/
COPY backend/src /usr/src/app/src

COPY --from=client /usr/src/app/dist/ /usr/src/app/src/main/resources/static/

# Build the backend application
RUN chmod +x mvnw && ./mvnw clean install


# Create the final Docker image
FROM eclipse-temurin:17-jdk-alpine

WORKDIR /usr/src/app

EXPOSE 8080

# Copy the JAR file from the builder stage
COPY --from=builder /usr/src/app/target/*.jar /usr/src/app/app.jar

ENTRYPOINT ["java", "-jar", "app.jar"]