import React from 'react';
import openbook from './assets/openbook.svg'
import Border from './MyComponents/Border';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FirstPage from './MyComponents/FirstPage';

function App() {

  return (
   <Router>
      <Routes>
        <Route element = {<Border />} >
          <Route path="/" element={FirstPage} />
        </Route>
      </Routes>
    </Router>


    
    )
}

export default App
