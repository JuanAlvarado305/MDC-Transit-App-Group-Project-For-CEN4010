import { Navigation } from 'lucide-react'

const Map = ({ darkMode }) => {
  // Simulated transit data
  const buses = [
    { id: 'B24', type: 'bus', route: '24', location: { lat: 25.790, lng: -80.204 }, heading: 45, nextStop: 'NE 2nd Ave & 36th St', eta: '3 min' },
    { id: 'B11', type: 'bus', route: '11', location: { lat: 25.774, lng: -80.195 }, heading: 180, nextStop: 'Biscayne Blvd & Flagler St', eta: '5 min' },
    { id: 'B8', type: 'bus', route: '8', location: { lat: 25.761, lng: -80.191 }, heading: 270, nextStop: 'Brickell Station', eta: '2 min' }
  ]

  const trains = [
    { id: 'T1', type: 'train', line: 'Green Line', location: { lat: 25.782, lng: -80.197 }, heading: 0, nextStation: 'Government Center', eta: '2 min' },
    { id: 'T2', type: 'train', line: 'Orange Line', location: { lat: 25.760, lng: -80.193 }, heading: 180, nextStation: 'Vizcaya', eta: '4 min' }
  ]

  const movers = [
    { id: 'M1', type: 'mover', loop: 'Inner Loop', location: { lat: 25.773, lng: -80.189 }, nextStation: 'Bayfront Park', eta: '1 min' }
  ]

  return (
    <div className="map-container">
      {/* Map Display */}
      <div className={`map-display ${darkMode ? 'dark' : 'light'}`}>
        <div className="map-content">
          <div className="map-visualization">
            <div className="transit-lines">
              {/* Red line for Metrorail */}
              <div className="transit-line metrorail"></div>
              {/* Blue line for Bus routes */}
              <div className="transit-line bus"></div>
              {/* Green line for People Mover */}
              <div className="transit-line mover"></div>
              
              {/* Transit Vehicle Markers */}
              <div className="vehicle-marker metrorail-marker" style={{ top: '50%', left: '25%' }}></div>
              <div className="vehicle-marker metrorail-marker" style={{ top: '50%', right: '33%' }}></div>
              <div className="vehicle-marker bus-marker" style={{ top: '25%', left: '33%' }}></div>
              <div className="vehicle-marker bus-marker" style={{ top: '25%', right: '25%' }}></div>
              <div className="vehicle-marker mover-marker" style={{ bottom: '25%', left: '50%' }}></div>
            </div>
          </div>
          
          <p className="map-description">Interactive Map with Real-Time Transit Locations</p>
          
          <div className="nearby-transit">
            <h3>Nearby Transit</h3>
            <ul className="transit-list">
              {buses.slice(0, 2).map(bus => (
                <li key={bus.id} className="transit-item">
                  <div className="transit-info">
                    <span className="transit-badge bus-badge">Bus {bus.route}</span>
                    <span className="transit-stop">{bus.nextStop}</span>
                  </div>
                  <span className="transit-eta">{bus.eta}</span>
                </li>
              ))}
              {trains.slice(0, 1).map(train => (
                <li key={train.id} className="transit-item">
                  <div className="transit-info">
                    <span className="transit-badge train-badge">{train.line}</span>
                    <span className="transit-stop">{train.nextStation}</span>
                  </div>
                  <span className="transit-eta">{train.eta}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Map Legend */}
      <div className={`map-legend ${darkMode ? 'dark' : 'light'}`}>
        <div className="legend-item">
          <div className="legend-color bus-color"></div>
          <span className="legend-label">Bus</span>
        </div>
        <div className="legend-item">
          <div className="legend-color metrorail-color"></div>
          <span className="legend-label">Metro Rail</span>
        </div>
        <div className="legend-item">
          <div className="legend-color mover-color"></div>
          <span className="legend-label">People Mover</span>
        </div>
      </div>
    </div>
  )
}

export default Map