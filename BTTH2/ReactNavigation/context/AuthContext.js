// 22521172 - Vo Nhat Phuong
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (userEmail, password) => {
    if (userEmail === '22521172@gm.uit.edu.vn' && password === 'vonhatphuong') {
      setIsAuthenticated(true);
    } else {
      alert("Thông tin đăng nhập không chính xác!");
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
