import React, { createContext, useContext, useState, useEffect } from 'react';

// Removed all TypeScript interfaces and types

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored user on app startup
    const storedUser = localStorage.getItem('ksStorezUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    try {
      // Simulate API call - in real app, this would be an actual API
      const mockUser = {
        id: Date.now().toString(),
        email,
        name: email.split('@')[0],
      };
      
      setUser(mockUser);
      localStorage.setItem('ksStorezUser', JSON.stringify(mockUser));
      setLoading(false);
      return true;
    } catch (error) {
      setLoading(false);
      return false;
    }
  };

  const signup = async (email, password, name) => {
    setLoading(true);
    try {
      // Simulate API call
      const mockUser = {
        id: Date.now().toString(),
        email,
        name,
      };
      
      setUser(mockUser);
      localStorage.setItem('ksStorezUser', JSON.stringify(mockUser));
      setLoading(false);
      return true;
    } catch (error) {
      setLoading(false);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('ksStorezUser');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};