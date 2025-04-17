import { useState, useEffect } from 'react'
import { Search, Circle } from 'lucide-react'

const RouteDetails = ({ darkMode, setShowRouteDetails }) => {
  const [searchInput, setSearchInput] = useState('')
  const [destinationInput, setDestinationInput] = useState('')
  const [routes, setRoutes] = useState([])
  const [selectedRoute, setSelectedRoute] = useState(null)

  useEffect(() => {
    // When the user searches for a route
    if (searchInput && destinationInput) {
      // Simulate route planning
      const mockRoutes = [
        {
          id: 1,
          name: 'Fastest Route',
          duration: '35 min',
          transfers: 1,
          steps: [
            { type: 'walk', detail: 'Walk to Brickell Station', duration: '5 min' },
            { type: 'train', detail: 'Take Green Line to Government Center', duration: '8 min' },
            { type: 'bus', detail: 'Take Bus #24 to destination', duration: '22 min' }
          ]
        },
        {
          id: 2,
          name: 'Fewer Transfers',
          duration: '42 min',
          transfers: 0,
          steps: [
            { type: 'walk', detail: 'Walk to Bus Stop #102', duration: '7 min' },
            { type: 'bus', detail: 'Take Bus #11 to destination', duration: '35 min' }
          ]
        }
      ]
      setRoutes(mockRoutes)
    }
  }, [searchInput, destinationInput])

  const selectRoute = (route) => {
    setSelectedRoute(route)
  }

  return (
    <div className={`route-details ${darkMode ? 'dark' : 'light'}`}>
      <div className="route-form">
        <div className="form-group">
          <label>From</label>
          <div className="input-group">
            <input
              type="text"
              placeholder="Current Location"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className={`form-input ${darkMode ? 'dark' : 'light'}`}
            />
            <button className={`form-button ${darkMode ? 'dark' : 'light'}`}>
              <Search size={18} />
            </button>
          </div>
        </div>
        
        <div className="form-group">
          <label>To</label>
          <div className="input-group">
            <input
              type="text"
              placeholder="Enter Destination"
              value={destinationInput}
              onChange={(e) => setDestinationInput(e.target.value)}
              className={`form-input ${darkMode ? 'dark' : 'light'}`}
            />
            <button 
              className="form-button search-button"
              onClick={() => {
                if(!searchInput) setSearchInput("Current Location")
                if(!destinationInput) setDestinationInput("Miami Beach")
              }}
            >
              Go
            </button>
          </div>
        </div>
      </div>

      {routes.length > 0 && (
        <div className="routes-list">
          <h3>Available Routes</h3>
          <div className="routes">
            {routes.map(route => (
              <div 
                key={route.id} 
                className={`route-card ${selectedRoute?.id === route.id ? 'selected' : ''} ${darkMode ? 'dark' : 'light'}`}
                onClick={() => selectRoute(route)}
              >
                <div className="route-card-header">
                  <div className="route-info">
                    <h4>{route.name}</h4>
                    <p className="transfer-info">{route.transfers} transfer{route.transfers !== 1 ? 's' : ''}</p>
                  </div>
                  <div className="route-timing">
                    <p className="duration">{route.duration}</p>
                    <p className="eta">ETA 1:35 PM</p>
                  </div>
                </div>
                
                {selectedRoute?.id === route.id && (
                  <div className="route-steps">
                    {route.steps.map((step, index) => (
                      <div key={index} className="step">
                        <div className="step-icon">
                          {step.type === 'walk' && <Circle size={16} />}
                          {step.type === 'bus' && <div className="icon-bus">B</div>}
                          {step.type === 'train' && <div className="icon-train">T</div>}
                        </div>
                        <div className="step-info">
                          <p className="step-detail">{step.detail}</p>
                          <p className="step-duration">{step.duration}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <button 
        className={`back-button ${darkMode ? 'dark' : 'light'}`}
        onClick={() => setShowRouteDetails(false)}
      >
        Back to Map
      </button>
    </div>
  )
}

export default RouteDetails