import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext, AuthProvider } from './context/AuthContext';
import AuthStack from './navigations/AuthStack';
import MainBottom from './navigations/MainBottom';
// 22521172 - Vo Nhat Phuong
function AppNavigator() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? <MainBottom /> : <AuthStack />}
    </NavigationContainer>
  );
}
export default function App() {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}

