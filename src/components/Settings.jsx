import { useState } from 'react'
import { ChevronRight } from 'lucide-react'

const Settings = ({ darkMode, setDarkMode }) => {
  const [notifications, setNotifications] = useState({
    serviceDisruptions: true,
    arrivalTimeAlerts: true,
    scheduleChanges: false
  })

  const toggleNotification = (key) => {
    setNotifications({
      ...notifications,
      [key]: !notifications[key]
    })
  }

  return (
    <div className="settings-container">
      <h2 className="section-title">Settings</h2>
      
      <div className={`settings-card ${darkMode ? 'dark' : 'light'}`}>
        <div className="settings-header">
          <h3>Display</h3>
        </div>
        <div className="settings-item">
          <span>Dark Mode</span>
          <label className="toggle-switch">
            <input 
              type="checkbox" 
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <span className={`toggle-slider ${darkMode ? 'active' : ''}`}></span>
          </label>
        </div>
      </div>
      
      <div className={`settings-card ${darkMode ? 'dark' : 'light'}`}>
        <div className="settings-header">
          <h3>Notifications</h3>
        </div>
        <div className="settings-item">
          <span>Service Disruptions</span>
          <label className="toggle-switch">
            <input 
              type="checkbox" 
              checked={notifications.serviceDisruptions}
              onChange={() => toggleNotification('serviceDisruptions')}
            />
            <span className={`toggle-slider ${notifications.serviceDisruptions ? 'active' : ''}`}></span>
          </label>
        </div>
        <div className="settings-item">
          <span>Arrival Time Alerts</span>
          <label className="toggle-switch">
            <input 
              type="checkbox" 
              checked={notifications.arrivalTimeAlerts}
              onChange={() => toggleNotification('arrivalTimeAlerts')}
            />
            <span className={`toggle-slider ${notifications.arrivalTimeAlerts ? 'active' : ''}`}></span>
          </label>
        </div>
        <div className="settings-item">
          <span>Schedule Changes</span>
          <label className="toggle-switch">
            <input 
              type="checkbox" 
              checked={notifications.scheduleChanges}
              onChange={() => toggleNotification('scheduleChanges')}
            />
            <span className={`toggle-slider ${notifications.scheduleChanges ? 'active' : ''}`}></span>
          </label>
        </div>
      </div>
      
      <div className={`settings-card ${darkMode ? 'dark' : 'light'}`}>
        <div className="settings-header">
          <h3>Account</h3>
        </div>
        <div className="settings-item clickable">
          <span>Profile</span>
          <ChevronRight size={20} className="chevron-icon" />
        </div>
        <div className="settings-item clickable">
          <span>Saved Routes</span>
          <ChevronRight size={20} className="chevron-icon" />
        </div>
        <div className="settings-item clickable">
          <span>Privacy</span>
          <ChevronRight size={20} className="chevron-icon" />
        </div>
        <div className="settings-item sign-out">
          <button className="sign-out-button">Sign Out</button>
        </div>
      </div>
    </div>
  )
}

export default Settings