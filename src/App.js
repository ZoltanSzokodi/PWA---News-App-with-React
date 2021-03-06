import React from 'react';
import { AuthProvider } from './context/AuthContext'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import UserAccount from './components/UserAccount'
import Home from './components/Home'
import Login from './components/Login'

function App() {
  return (
    <AuthProvider>
      <Router>
        <React.Fragment>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/account" component={UserAccount} />
        </React.Fragment>
      </Router>
    </AuthProvider>
  );
}

export default App;
