import React from 'react';
import { AuthProvider } from './context/AuthContext'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'

function App() {
  return (
    <AuthProvider>
      <Router>
        <React.Fragment>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </React.Fragment>
      </Router>
    </AuthProvider>
  );
}

export default App;
