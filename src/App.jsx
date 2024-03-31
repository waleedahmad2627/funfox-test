import React from 'react';
import openbook from './assets/openbook.svg'
import Border from './MyComponents/Border';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FirstPage from './MyComponents/FirstPage';
import SecondPage from './MyComponents/SecondPage';

function App() {

  return (
    <Router>
      <Border>
        <Routes>
          <Route path="/" element={<FirstPage/>} />
          <Route path="/second" element={<SecondPage/>} />

        </Routes>
      </Border>
    </Router>
  );

}

export default App
