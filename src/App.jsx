import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Pages from './pages/Pages';
import Blog from './pages/Blog';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Login from './pages/LoginFrom';
import Wishlist from './pages/Wishlist';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home2 from './pages/Home2';
import Aboutblog from './pages/Aboutblog';
import { useState } from 'react';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Footer from './pages/Footer';
import OrderConfirom from './pages/Orderconfirom';
import Productdetails from './pages/Productdetails';
import Aboutus from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', password: 'password123' }
];

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLogin = (email, password) => {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      setCurrentUser(user);
      toast.success('Login successful!');
    } else {
      toast.error('Invalid credentials. Please try again.');
    }
  };

  const handleRegister = (name, email, password) => {
    if (users.some(u => u.email === email)) {
      toast.error('Email already exists. Please try a different one.');
      return;
    }
    const newUser = { id: users.length + 1, name, email, password };
    users.push(newUser);
    setCurrentUser(newUser);
    toast.success('Registration successful!');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    toast.info('Logged out successfully.');
  };
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    setCartItems(prevItems => [...prevItems, product])
  }

  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wishlist" element={<Wishlist />} />
     <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/products" element={<Products addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        <Route path='/home2' element={<Home2/>}/>
        <Route path='/aboutblog' element={<Aboutblog/>}/>
        <Route path='/orderconfirom' element={<OrderConfirom/>}/>
        <Route path="/product/:id" element={<Productdetails />} />
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
      </Routes>
      {/* <div className="app-container">
      <ToastContainer position="top-right" autoClose={3000} />
      {currentUser ? (
        <UserInfo user={currentUser} onLogout={handleLogout} />
      ) : (
        <div className="auth-container">
          <h1>{isRegistering ? 'Register' : 'Login'}</h1>
          {isRegistering ? (
            <RegisterForm onRegister={handleRegister} />
          ) : (
            <LoginForm onLogin={handleLogin} />
          )}
          <button 
            className="toggle-auth" 
            onClick={() => setIsRegistering(!isRegistering)}
          >
            {isRegistering ? 'Already have an account? Login' : 'Need an account? Register'}
          </button>
        </div>
      )}
    </div> */}
    <Footer/> 
    </Router>
    
  );
}

export default App;

