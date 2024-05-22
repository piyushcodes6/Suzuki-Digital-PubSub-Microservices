# PubSub Microservice

This project demonstrates a PubSub architecture using Node.js, Express, MongoDB, and Redis. The application includes a receiver service that accepts JSON data, validates it, saves it to a MongoDB collection, and a listener service that listens to events from the receiver service and processes the data.

## Features

- Expose a secure endpoint `/receiver` to accept POST data in JSON format
- Perform validation on incoming data
- Save validated data to a MongoDB collection
- Listen to events and process data into a second MongoDB collection

## Prerequisites

- Docker and Docker Compose
- Git

## Getting Started

### Clone the Repository

To clone the repository, run the following command:

-git clone <your-repo-url>
-cd pubsub-microservice

### Build and Run the Application

-docker-compose up --build

Once the docker image is created successfully you can use access it. 

### Accessing the Receiver Endpoint
The receiver service exposes a POST endpoint at: "http://localhost:3000/receiver"

Json example : {
  "user": "Balendu",
  "class": "Ful-Stack Development",
  "age": 25,
  "email": "balendu@gmail.com"
}

### Accessing MongoDB collection on your localhost

If you're using mongodb-compass then just provide this endpoint : mongodb://localhost:27017

Inside this your will be able to see pubsub collection. 


