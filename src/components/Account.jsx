import { User } from 'lucide-react'

const Account = ({ darkMode }) => {
  return (
    <div className="account-container">
      <div className="profile-header">
        <div className={`profile-avatar ${darkMode ? 'dark' : 'light'}`}>
          <User size={40} className="avatar-icon" />
        </div>
        <h2 className="profile-name">User Profile</h2>
        <p className="profile-email">user@example.com</p>
      </div>
      
      <div className={`account-card ${darkMode ? 'dark' : 'light'}`}>
        <div className="account-header">
          <h3>Saved Routes</h3>
        </div>
        <div className="saved-routes">
          <div className="saved-route">
            <h4>Home to Work</h4>
            <p>Via Metrorail Green Line</p>
          </div>
          <div className="saved-route">
            <h4>Work to Gym</h4>
            <p>Via Bus #24</p>
          </div>
        </div>
      </div>
      
      <div className={`account-card ${darkMode ? 'dark' : 'light'}`}>
        <div className="account-header">
          <h3>Favorites</h3>
        </div>
        <div className="favorite-locations">
          <div className="favorite-location">
            <h4>Home</h4>
            <p>123 Main St, Miami</p>
          </div>
          <div className="favorite-location">
            <h4>Work</h4>
            <p>456 Business Ave, Downtown</p>
          </div>
          <div className="favorite-location">
            <h4>Gym</h4>
            <p>789 Fitness Blvd, Brickell</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account