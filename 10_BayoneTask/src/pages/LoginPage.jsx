import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { login } from '../services/api.js';

const TOKEN_KEY = 'auth_token';

function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/dashboard';

  const [email, setEmail] = useState('user@gmail.com');
  const [password, setPassword] = useState('password@123');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    try {
      const response = await login({ email, password });
      const token = response.data?.token;

      if (token) {
        localStorage.setItem(TOKEN_KEY, token);
        navigate(from, { replace: true });
      } else {
        setError('Login response did not include a token.');
      }
    } catch (err) {
      if (err.response?.status === 400) {
        setError('Invalid email or password.');
      } else {
        setError('Unable to log in right now. Please try again.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleRetry = () => {
    setError('');
  };

  return (
    <div className="page-shell">
      <div className="card auth-card">
        <h1 className="card-title">Sign in</h1>
        <p className="card-subtitle">Use the demo credentials to continue.</p>

        {error && (
          <div className="alert alert-error">
            <span>{error}</span>
            <button type="button" className="text-button" onClick={handleRetry}>
              Retry
            </button>
          </div>
        )}

        <form className="form" onSubmit={handleSubmit}>
          <label className="field">
            <span className="field-label">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              placeholder="you@example.com"
              required
            />
          </label>

          <label className="field">
            <span className="field-label">Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              placeholder="Enter password"
              required
            />
          </label>

          <button type="submit" className="button primary" disabled={submitting}>
            {submitting ? <span className="loader small" /> : 'Continue'}
          </button>
        </form>

        <div className="hint">
          <span>Demo email:</span> user@gmail.com

          <br />
          <span>Demo password:</span> password@123
        </div>
      </div>
    </div>
  );
}

export default LoginPage;


