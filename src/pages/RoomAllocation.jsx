import { useState, useEffect } from 'react';
import './RoomAllocation.css';

// Placeholder URL - User needs to replace this with their published Google Sheet CSV URL
// To get this: Open Google Sheet -> File -> Share -> Publish to web -> Select Sheet -> CSV -> Publish -> Copy Link
const GOOGLE_SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTmt3ka2HE9LPraWbXLAH5iyQym__xcxIJmobpwZaYdB6UuJQ0aElmPbxLjaH12NGwo6B0IfMgWNHMm/pub?gid=0&single=true&output=csv"; 

function RoomAllocation() {
  const [delegates, setDelegates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(GOOGLE_SHEET_CSV_URL);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const text = await response.text();
      const parsedData = parseCSV(text);
      setDelegates(parsedData);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Failed to load room allocation data. Please try again later.");
      setLoading(false);
    }
  };

  const parseCSV = (csvText) => {
    const lines = csvText.split('\n');
    const headers = lines[0].split(',').map(h => h.trim().toLowerCase());
    
    const data = [];
    
    for (let i = 1; i < lines.length; i++) {
      const currentLine = lines[i].split(',');
      
      if (currentLine.length === headers.length) {
        const entry = {};
        
        // Map CSV columns to our data structure
        // We look for keywords in headers to identify columns
        headers.forEach((header, index) => {
          const value = currentLine[index] ? currentLine[index].trim() : "";
          
          if (header.includes('name')) entry.name = value;
          else if (header.includes('gender')) entry.gender = value;
          else if (header.includes('personal contact number') || header.includes('phone') || header.includes('mobile')) entry.phone = value;
          else if (header.includes('room no') || header.includes('room')) entry.room = value;
          else if (header.includes('keyholder')) {
            // Check for various truthy values
            const lowerValue = value.toLowerCase();
            entry.isKeyholder = lowerValue === 'kh' || 
                               lowerValue === 'true' || 
                               lowerValue === 'yes' || 
                               lowerValue === 'checked' || 
                               lowerValue === 'keyholder' ||
                               (value.length > 0 && value === entry.name);
          }
        });
        
        // Only add if we have at least a name and room
        if (entry.name && entry.room) {
          data.push(entry);
        }
      }
    }
    
    return data;
  };

  const getGroupedDelegates = () => {
    if (!searchTerm.trim()) {
      return {};
    }

    const searchLower = searchTerm.toLowerCase();

    // Filter delegates that match the search term (by name or room)
    const matchingDelegates = delegates.filter(delegate => 
      (delegate.name && delegate.name.toLowerCase().includes(searchLower)) ||
      (delegate.room && delegate.room.toLowerCase().includes(searchLower))
    );

    // Group matching delegates by room
    const grouped = {};
    matchingDelegates.forEach(delegate => {
      if (!grouped[delegate.room]) {
        grouped[delegate.room] = [];
      }
      grouped[delegate.room].push(delegate);
    });

    // Sort delegates in each room: Keyholder first, then alphabetical
    Object.keys(grouped).forEach(room => {
      grouped[room].sort((a, b) => {
        if (a.isKeyholder && !b.isKeyholder) return -1;
        if (!a.isKeyholder && b.isKeyholder) return 1;
        return a.name.localeCompare(b.name);
      });
    });

    return grouped;
  };

  const groupedDelegates = getGroupedDelegates();
  const sortedRooms = Object.keys(groupedDelegates).sort((a, b) => {
    // Try to sort numerically if possible
    const numA = parseInt(a);
    const numB = parseInt(b);
    if (!isNaN(numA) && !isNaN(numB)) return numA - numB;
    return a.localeCompare(b);
  });

  return (
    <div className="room-allocation-container">
      <div className="room-allocation-header">
        <h1>Delegate Room Allocation</h1>
        <p>Find your allocated room by searching for your name or room number.</p>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search by Name or Room Number..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {loading ? (
        <div className="loading-container">
          <p>Loading room details...</p>
        </div>
      ) : error ? (
        <div className="error-container">
          <p>{error}</p>
        </div>
      ) : (
        <div className="rooms-container">
          {!searchTerm.trim() ? (
            <div className="no-results">
              <p>Please enter a name or room number to view details.</p>
            </div>
          ) : sortedRooms.length > 0 ? (
            sortedRooms.map(room => (
              <div key={room} className="room-group">
                <h2 className="room-header">Room {room}</h2>
                <div className="delegates-grid">
                  {groupedDelegates[room].map((delegate, index) => (
                    <div key={index} className={`delegate-card ${delegate.isKeyholder ? 'keyholder-card' : ''}`}>
                      <div className="delegate-header">
                        <h3 className="delegate-name">
                          {delegate.name}
                        </h3>
                        {delegate.isKeyholder && <div className="keyholder-tag">Keyholder</div>}
                      </div>
                      <div className="delegate-details">
                        <div className="detail-row">
                          <span className="detail-label">Gender:</span>
                          <span>{delegate.gender || 'N/A'}</span>
                        </div>
                        <div className="detail-row">
                          <span className="detail-label">Phone:</span>
                          <span>{delegate.phone || 'N/A'}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <p>No delegates found matching "{searchTerm}"</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default RoomAllocation;
