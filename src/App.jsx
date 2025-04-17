import React, { useState } from 'react'
// Import CSS here instead of in main.jsx
import './App.css'
import Map from './components/Map'
import RouteDetails from './components/RouteDetails'
import Notifications from './components/Notifications'
import Settings from './components/Settings'
import Account from './components/Account'
import Navigation from './components/Navigation'

function App() {
  const [activeTab, setActiveTab] = useState('map')
  const [darkMode, setDarkMode] = useState(false)
  const [showRouteDetails, setShowRouteDetails] = useState(false)

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      {/* App Header */}
      <header className="app-header">
        <h1>MDC Transit</h1>
        {activeTab === 'map' && !showRouteDetails && (
          <button 
            onClick={() => setShowRouteDetails(true)}
            className="plan-route-button"
          >
            Plan Route
          </button>
        )}
        {activeTab === 'notifications' && (
          <button className="mark-read-button">Mark all as read</button>
        )}
      </header>

      {/* Main Content Area */}
      <main className="main-content">
        {activeTab === 'map' && !showRouteDetails && (
          <Map darkMode={darkMode} />
        )}

        {activeTab === 'map' && showRouteDetails && (
          <RouteDetails 
            darkMode={darkMode} 
            setShowRouteDetails={setShowRouteDetails} 
          />
        )}

        {activeTab === 'notifications' && (
          <Notifications darkMode={darkMode} />
        )}

        {activeTab === 'settings' && (
          <Settings darkMode={darkMode} setDarkMode={setDarkMode} />
        )}

        {activeTab === 'account' && (
          <Account darkMode={darkMode} />
        )}
      </main>

      {/* Bottom Navigation */}
      <Navigation 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        darkMode={darkMode} 
      />
    </div>
  )
}

export default App