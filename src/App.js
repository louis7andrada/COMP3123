import React from 'react';
import { useSelector } from 'react-redux';
import LoginForm from './components/LoginForm';

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
      <div>
        {!isAuthenticated ? (
            <LoginForm />
        ) : (
            <div>Welcome! You are logged in.</div>
        )}
      </div>
  );
};

export default App;
