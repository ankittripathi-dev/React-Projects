import { useMemo, useState } from 'react';
import './App.css';
import { initialRooms, resetRooms } from './data/rooms';
import { findRoomsForBooking, toggleRandomOccupancy } from './utils/bookingLogic';

function App() {
  const [rooms, setRooms] = useState(initialRooms);
  const [requestedCount, setRequestedCount] = useState(1);
  const [newlyBookedIds, setNewlyBookedIds] = useState([]);
  const [message, setMessage] = useState('');

  const floors = useMemo(() => {
    const grouped = {};
    rooms.forEach((room) => {
      if (!grouped[room.floor]) grouped[room.floor] = [];
      grouped[room.floor].push(room);
    });
    Object.values(grouped).forEach((list) =>
      list.sort((a, b) => a.position - b.position)
    );
    return grouped;
  }, [rooms]);

  const handleBook = () => {
    setMessage('');
    setNewlyBookedIds([]);

    const result = findRoomsForBooking(rooms, Number(requestedCount));

    if (result.error) {
      setMessage(result.error);
      return;
    }

    const idsToBook = result.rooms.map((room) => room.id);
    const updated = rooms.map((room) =>
      idsToBook.includes(room.id) ? { ...room, occupied: true } : room
    );

    setRooms(updated);
    setNewlyBookedIds(idsToBook);
    setMessage(`Booked ${idsToBook.length} room(s). Travel time: ${result.travelTime} min`);
  };

  const handleRandomOccupancy = () => {
    setRooms(toggleRandomOccupancy(rooms));
    setNewlyBookedIds([]);
    setMessage('Random occupancy generated.');
  };

  const handleReset = () => {
    setRooms(resetRooms());
    setNewlyBookedIds([]);
    setMessage('All rooms reset to available.');
    setRequestedCount(1);
  };

  const statusLabel = (room) => {
    if (newlyBookedIds.includes(room.id)) return 'new';
    if (room.occupied) return 'occupied';
    return 'available';
  };

  const totalAvailable = rooms.filter((room) => !room.occupied).length;
  const totalOccupied = rooms.filter((room) => room.occupied).length;
  const totalSelected = newlyBookedIds.length;

  return (
    <div className="app">
      <nav className="topbar">
        <div className="brand">
          <div className="brand-icon" aria-label="Hotel logo">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="5" y="3" width="14" height="18" rx="2" fill="#0c1220" />
              <rect x="8" y="6" width="3" height="3" rx="0.6" fill="#f3c046" />
              <rect x="13" y="6" width="3" height="3" rx="0.6" fill="#f3c046" />
              <rect x="8" y="11" width="3" height="3" rx="0.6" fill="#f3c046" />
              <rect x="13" y="11" width="3" height="3" rx="0.6" fill="#f3c046" />
              <rect x="8" y="16" width="3" height="3" rx="0.6" fill="#f3c046" />
              <rect x="13" y="16" width="3" height="3" rx="0.6" fill="#f3c046" />
              <rect x="11" y="3" width="2" height="3" rx="0.6" fill="#0c1220" />
            </svg>
          </div>
          <div>
            <div className="brand-title">
              <span className="brand-strong">Grand Luxe</span> Hotel
            </div>
            <div className="brand-sub">Room Reservation System • 97 Rooms • 10 Floors</div>
          </div>
        </div>
      </nav>

      <div className="layout">
        <section className="board">
          <div className="board-header">
            <div>
              <p className="eyebrow">Hotel Layout</p>
              <p className="muted">Rooms arranged left → right from lift</p>
            </div>
            <div className="legend">
              <span className="legend-dot available" />
              <span className="legend-label">Available</span>
              <span className="legend-dot occupied" />
              <span className="legend-label">Occupied</span>
              <span className="legend-dot new" />
              <span className="legend-label">Selected</span>
            </div>
          </div>

          <div className="grid">
            {[...Array(10)].map((_, idx) => {
              const floorNumber = 10 - idx; // Render top floor first
              const floorRooms = floors[floorNumber] || [];
              return (
                <div className="floor-row" key={floorNumber}>
                  <div className="floor-label">
                    <span className="floor-icon">🏢</span>
                    <span className="floor-number">F{floorNumber}</span>
                  </div>
                  <div
                    className="room-row"
                    style={{
                      gridTemplateColumns: `repeat(${floorRooms.length}, minmax(62px, 1fr))`,
                    }}
                  >
                    {floorRooms.map((room) => (
                      <div
                        key={room.id}
                        className={`room ${statusLabel(room)}`}
                        aria-label={`Room ${room.roomNumber} ${statusLabel(room)}`}
                      >
                        {room.roomNumber}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <aside className="sidebar">
          <div className="stats">
            <div className="stat-card stat-available">
              <p className="stat-label">Available</p>
              <p className="stat-value">{totalAvailable}</p>
            </div>
            <div className="stat-card stat-occupied">
              <p className="stat-label">Occupied</p>
              <p className="stat-value">{totalOccupied}</p>
            </div>
            <div className="stat-card stat-selected">
              <p className="stat-label">Selected</p>
              <p className="stat-value">{totalSelected}</p>
            </div>
          </div>

          <div className="card">
            <h3>Book Rooms</h3>
            <label className="input-label" htmlFor="roomCount">
              Number of Rooms (1-5)
            </label>
            <div className="input-row">
              <input
                id="roomCount"
                type="number"
                min="1"
                max="5"
                value={requestedCount}
                onChange={(e) => setRequestedCount(e.target.value)}
              />
              <button onClick={handleBook}>Book Now</button>
            </div>
            {message && <p className="message">{message}</p>}
          </div>

          <div className="card actions">
            <button className="secondary" onClick={handleRandomOccupancy}>
              Random Occupancy
            </button>
            <button className="ghost" onClick={handleReset}>
              Reset All
            </button>
          </div>

          <div className="card rules">
            <h4>Booking Rules</h4>
            <ul>
              <li>Maximum 5 rooms per booking</li>
              <li>Priority: same floor first</li>
              <li>Optimizes for minimum travel time</li>
              <li>Horizontal: 1 min/room, Vertical: 2 min/floor</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default App;

