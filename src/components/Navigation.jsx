import { Navigation as NavigationIcon, Bell, Settings, User } from 'lucide-react'

const Navigation = ({ activeTab, setActiveTab, darkMode }) => {
  return (
    <nav className={`bottom-nav ${darkMode ? 'dark' : 'light'}`}>
      <button 
        className={`nav-item ${activeTab === 'map' ? 'active' : ''}`}
        onClick={() => setActiveTab('map')}
      >
        <NavigationIcon size={20} />
        <span className="nav-label">Map</span>
      </button>
      <button 
        className={`nav-item ${activeTab === 'notifications' ? 'active' : ''}`}
        onClick={() => setActiveTab('notifications')}
      >
        <Bell size={20} />
        <span className="nav-label">Alerts</span>
      </button>
      <button 
        className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
        onClick={() => setActiveTab('settings')}
      >
        <Settings size={20} />
        <span className="nav-label">Settings</span>
      </button>
      <button 
        className={`nav-item ${activeTab === 'account' ? 'active' : ''}`}
        onClick={() => setActiveTab('account')}
      >
        <User size={20} />
        <span className="nav-label">Account</span>
      </button>
    </nav>
  )
}

export default Navigation