import React, { useState } from 'react';
import './login.css';
import logo from '../../assets/logo2.png';
import { login, signup } from '../../../firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [signstate, setSignState] = useState('Sign In');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const user_auth = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      if (signstate === 'Sign In') {
        await login(email, password);
      } else {
        await signup(name, email, password);
      }

       setTimeout(() => {
             navigate('/');
        }, 1500);

    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <div className="login-spinner">
              <div className="loader"></div>
               <p>Signing you in...</p>
        </div>
      ) : (
        <div className="login">
          <img src={logo} alt="TTech Movies" className="login-logo" />

          <div className="login-form">
            <h1>{signstate}</h1>

            <form onSubmit={user_auth}>
              {signstate === 'Sign Up' && (
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              )}

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button type="submit">{signstate}</button>

              <div className="form-help">
                <div className="remember">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">Remember me</label>
                </div>
                <p>Need help?</p>
              </div>
            </form>

            <div className="form-switch">
              {signstate === 'Sign In' ? (
                <p>
                  New to TTech?{' '}
                  <span onClick={() => setSignState('Sign Up')}>
                    Sign up now
                  </span>
                </p>
              ) : (
                <p>
                  Already have an account?{' '}
                  <span onClick={() => setSignState('Sign In')}>
                    Sign in
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
