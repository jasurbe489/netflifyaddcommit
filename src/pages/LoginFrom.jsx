import React, { useState } from 'react';
import { auth } from '../Firebase.config.js';
import { 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider,
  FacebookAuthProvider 
} from 'firebase/auth';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../components/Login.css';
function LoginFrom() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('Successfully logged in!');
      // Reset form
      setEmail('');
      setPassword('');
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      toast.success('Successfully logged in with Google!');
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const provider = new FacebookAuthProvider();
      await signInWithPopup(auth, provider);
      toast.success('Successfully logged in with Facebook!');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="login-container">
      <ToastContainer />
      <div className="login-box">
        <h1 className="login-title">Login</h1>
        <p className="login-subtitle">Please login using account detail bellow.</p>

        <form onSubmit={handleEmailLogin} className="login-form">
          <div className="form-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              required
              className="login-input"
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="login-input"
            />
          </div>

          <div className="forgot-password">
            <a href="#">Forgot your password?</a>
          </div>

          <button 
            type="submit" 
            className="login-button"
            disabled={loading}
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>

          <div className="social-login">
            <button 
              type="button" 
              onClick={handleGoogleLogin}
              className="social-button google"
            >
              <FaGoogle /> Sign in with Google
            </button>
            <button 
              type="button" 
              onClick={handleFacebookLogin}
              className="social-button facebook"
            >
              <FaFacebook /> Sign in with Facebook
            </button>
          </div>

          <div className="create-account">
            Don't have an Account?
            <a href="#"> Create account</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginFrom;

