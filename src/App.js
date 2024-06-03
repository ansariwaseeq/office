// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import NewToken from './components/Newtoken/NewToken';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/components/Newtoken" element={<NewToken />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
