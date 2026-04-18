import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchUsers } from '../services/api.js';

const TOKEN_KEY = 'auth_token';

function DashboardPage() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let cancelled = false;

    const loadUsers = async () => {
      setLoading(true);
      setError('');

      try {
        const response = await fetchUsers();
        if (!cancelled) {
          setUsers(response.data?.data || []);
        }
      } catch (err) {
        if (!cancelled) {
          setError('Unable to load users. Please try again.');
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    loadUsers();

    return () => {
      cancelled = true;
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem(TOKEN_KEY);
    navigate('/login', { replace: true });
  };

  const handleRetry = () => {
    setError('');
    setLoading(true);
    fetchUsers()
      .then((response) => {
        setUsers(response.data?.data || []);
      })
      .catch(() => {
        setError('Unable to load users. Please try again.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="page-shell">
      <div className="dashboard-header">
        <div>
          <h1 className="card-title">Team directory</h1>
          <p className="card-subtitle">Users fetched from the ReqRes public API.</p>
        </div>
        <button type="button" className="button subtle" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {loading && (
        <div className="centered-block">
          <span className="loader" />
          <span className="loader-label">Loading users...</span>
        </div>
      )}

      {!loading && error && (
        <div className="card">
          <div className="alert alert-error">
            <span>{error}</span>
          </div>
          <button type="button" className="button primary" onClick={handleRetry}>
            Retry
          </button>
        </div>
      )}

      {!loading && !error && (
        <div className="user-grid">
          {users.map((user) => (
            <article key={user.id} className="card user-card">
              <div className="user-avatar-wrapper">
                <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} className="user-avatar" />
              </div>
              <div className="user-body">
                <h2 className="user-name">
                  {user.first_name} {user.last_name}
                </h2>
                <p className="user-email">{user.email}</p>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

export default DashboardPage;


