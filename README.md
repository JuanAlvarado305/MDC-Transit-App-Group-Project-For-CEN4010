# MDC Transit App

A real-time monitoring system for Miami-Dade County public transportation that provides instant visibility into the locations of buses and metro rail trains.

## Project Overview

This application was developed as a final project for CEN4010. The MDC Transit App aims to enhance the commuting experience by delivering more accurate and timely information about public transportation in Miami-Dade County, reducing rider uncertainty and improving overall satisfaction.

## Features

- **Real-time Transit Tracking**: Track the current location of all Miami-Dade transit vehicles including buses, Metrorail trains, and People Mover
- **Route Planning**: Find the fastest route to your destination with options for different priorities (fastest route, fewer transfers)
- **Push Notifications**: Receive alerts about service disruptions, delays, and schedule changes
- **User-friendly Interface**: Simple design with intuitive navigation for all technical backgrounds
- **Personalized Experience**: Save favorite routes and locations for quick access
- **Dark/Light Mode**: Adjust the display based on lighting conditions and user preference

## Technologies Used

- React: Frontend framework for building the user interface
- Vite: Next generation frontend tooling for faster development
- Lucide React: Lightweight icon library
- CSS: Custom styling for a unique visual identity

## Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/mdc-transit-app.git
   cd mdc-transit-app
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
mdc-transit-app/
├── public/
├── src/
│   ├── App.jsx         # Main application component
│   ├── main.jsx        # Application entry point
│   ├── components/     # UI components
│   │   ├── Map.jsx     # Transit map view
│   │   ├── RouteDetails.jsx
│   │   ├── Notifications.jsx
│   │   ├── Settings.jsx
│   │   ├── Account.jsx
│   │   └── Navigation.jsx
```

## Requirements

The application was designed to meet specific functional and non-functional requirements:

### Functional Requirements
- Transit tracking with real-time location updates
- Estimated arrival times for each stop
- User-friendly interface with interactive maps
- Platform support for both iOS and Android
- Notification system for alerts and updates
- User management with saved routes and preferences

### Non-Functional Requirements
- Performance: Quick response times even during peak usage
- Security: Protection of user data and privacy
- Usability: Accessible design for users of all abilities
- Reliability: Backup systems for connection loss
- Scalability: Ability to handle increasing user loads

## Limitations

- GPS updates occur every 30 seconds
- Arrival predictions are confined to a 20-minute window
- Offline functionality is limited to cached data
- Real-time tracking requires an active internet connection

## Contributors

- Juan Alvarado
- Darian
- Helena Pou
- Luckson Jean
- Stwphano

## License

This project is licensed under the MIT License - see the LICENSE file for details.
