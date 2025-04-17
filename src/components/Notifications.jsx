import { useState } from 'react'
import { Clock, AlertTriangle, Bell } from 'lucide-react'

const Notifications = ({ darkMode }) => {
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'delay', message: 'Bus #24 is running 10 minutes late', time: '12:45 PM', read: false },
    { id: 2, type: 'alert', message: 'Metrorail service interruption between Government Center and Brickell', time: '11:30 AM', read: true },
    { id: 3, type: 'update', message: 'Route #11 detour due to construction on NW 7th Ave', time: '9:15 AM', read: false }
  ])

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })))
  }

  return (
    <div className="notifications-container">
      <h2 className="section-title">Notifications</h2>
      <div className="notifications-list">
        {notifications.map(notification => (
          <div 
            key={notification.id} 
            className={`notification-card ${notification.read ? 'read' : 'unread'} ${darkMode ? 'dark' : 'light'}`}
          >
            <div className="notification-content">
              <div className="notification-icon">
                {notification.type === 'delay' && <Clock className="icon-delay" size={20} />}
                {notification.type === 'alert' && <AlertTriangle className="icon-alert" size={20} />}
                {notification.type === 'update' && <Bell className="icon-update" size={20} />}
              </div>
              <div className="notification-details">
                <p className={`notification-message ${notification.read ? 'read' : 'unread'}`}>
                  {notification.message}
                </p>
                <p className="notification-time">{notification.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Notifications