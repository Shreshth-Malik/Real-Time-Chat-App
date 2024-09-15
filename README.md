# Real-Time Chat Application

A real-time chat application built using **Node.js**, **Express**, **Socket.IO**, and **RabbitMQ** to facilitate instant messaging and reliable message delivery. The application is containerized using **Docker** for consistent environment setup and easy deployment.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Future Enhancements](#future-enhancements)

## Features
- Real-time, bi-directional communication using WebSocket-based connections.
- Reliable message delivery with RabbitMQ message queuing.
- Docker containerization for an isolated and consistent development environment.
- Easily extendable for additional features like user authentication, media sharing, or database integration.

## Technologies Used
- **Node.js**: Server-side JavaScript runtime.
- **Express**: Web framework for building RESTful APIs and handling HTTP requests.
- **Socket.IO**: For real-time, bi-directional communication between server and clients.
- **RabbitMQ**: Message broker for handling asynchronous messaging.
- **Docker**: For containerizing RabbitMQ and the application to ensure consistency across environments.

## Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
- [Node.js](https://nodejs.org/) (v12+)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Docker](https://www.docker.com/) (to run RabbitMQ)
- Basic knowledge of JavaScript and command-line interface

## Setup and Installation

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/real-time-chat-app.git
cd real-time-chat-app
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start RabbitMQ Server
If you have Docker installed, start a RabbitMQ container:
```bash
docker run -d --hostname rabbitmq --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management
```
Access the RabbitMQ management UI at http://localhost:15672 (default login: guest, password: guest).

### 4. Start the Application
```bash
node server.js
```
The server will start on port 3000. You can access the chat application at http://localhost:3000.

## Usage

- Open a web browser and navigate to http://localhost:3000.
- Open multiple tabs/windows to simulate multiple chat users.
- Send a message in one tab, and it will appear instantly in the others, demonstrating real-time communication.

## Project Structure
```php
real-time-chat-app/
│
├── public/
│   ├── index.html        # Frontend for the chat application
│   └── styles.css        # Styles for the chat UI (optional)
│
├── server.js             # Main server file
│
├── package.json          # Node.js project configuration and dependencies
│
└── README.md             # Project documentation
```

## Future Enhancements
- User Authentication: Implement user authentication to handle user login and registration.
- Database Integration: Integrate database to store user data and chat history.
- Deployment: Deploy the application to a cloud platform like AWS, Heroku, or DigitalOcean.
- Error Handling: Improve error handling and logging for debugging and monitoring purposes.
