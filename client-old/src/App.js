import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FluentProvider } from '@fluentui/react-components';
import { useTheme } from './ThemeContext';
import Layout from './components/Layout';
import EventList from './components/EventList';
import EventDetails from './components/EventDetails';
import EventForm from './components/EventForm';
import UpdateEvent from './components/UpdateEvent';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import GlobalStyle from './globalStyles';

const App = () => {
  const [actionButtons, setActionButtons] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <FluentProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <Router>
        <Layout actionButtons={actionButtons} isAuthenticated={isAuthenticated} onLogout={handleLogout} toggleTheme={toggleTheme}>
          <Routes>
            <Route path="/" element={<EventList setActionButtons={setActionButtons} isAuthenticated={isAuthenticated} />} />
            <Route path="/details/:id" element={<EventDetails setActionButtons={setActionButtons} />} />
            <Route path="/create" element={<EventForm setActionButtons={setActionButtons} />} />
            <Route path="/update/:id" element={<UpdateEvent setActionButtons={setActionButtons} />} />
            <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/register" element={<Register setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Layout>
      </Router>
    </FluentProvider>
  );
};

export default App;
