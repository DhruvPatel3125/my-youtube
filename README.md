# YouTube Clone Project

This project is a YouTube clone, built with React for the frontend and Node.js with Express for the backend. It includes features like video browsing, search, live chat, and user authentication using Firebase.

## Features

- **Video Playback**: Stream YouTube videos.
- **Search Functionality**: Search for videos.
- **Live Chat**: Real-time chat during live streams.
- **User Authentication**: Sign up and log in using Firebase.

## Technologies Used

### Frontend

- **React**: A JavaScript library for building user interfaces.
- **Redux Toolkit**: For state management.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Firebase**: For user authentication and possibly other backend services.

### Backend

- **Node.js**: A JavaScript runtime for server-side development.
- **Express.js**: A web application framework for Node.js.

## Project Structure

- `my-youtube/`: Contains the React frontend application.
- `server/`: Contains the Node.js/Express backend application.

## Setup Instructions

### 1. Clone the repository

```bash
git clone <repository-url>
cd youtube
```

### 2. Frontend Setup

Navigate to the `my-youtube` directory and install the dependencies:

```bash
cd my-youtube
npm install
```

To run the frontend in development mode:

```bash
npm start
```

### 3. Backend Setup

Navigate to the `server` directory and install the dependencies:

```bash
cd ../server
npm install
```

To run the backend server:

```bash
node server.js
# or with nodemon for development:
nodemon server.js
```

### 4. Firebase Configuration

Ensure your Firebase configuration is correctly set up in `my-youtube/src/utils/firebase.jsx`.

```javascript
// my-youtube/src/utils/firebase.jsx
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID",
};
```

Replace the placeholder values with your actual Firebase project configuration.

