// src/App.jsx
import { useState, useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './components/firebase';

import Register from './components/Register';
import Login from './components/Login';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  // ✅ Keep listening to auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // Clean up listener on unmount
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => alert("Logged out successfully"))
      .catch((err) => alert(err.message));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <nav className="mb-6 space-x-4">
        <Link to="/" className="text-blue-500 hover:underline">Home</Link>
        <Link to="/register" className="text-blue-500 hover:underline">Register</Link>
        <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <div className="bg-white p-6 rounded shadow-md text-center w-96">
              <h1 className="text-2xl font-bold mb-4">Firebase Auth Example</h1>
              {user ? (
                <>
                  <p className="mb-4">Welcome, <strong>{user.email}</strong></p>
                  <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <p>Please register or login.</p>
              )}
            </div>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
