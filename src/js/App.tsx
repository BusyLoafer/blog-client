import React, { useEffect } from 'react'
import axios from 'axios';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import MainPage from './pages/MainPage';
import { API_URL } from './libs/config';

const App = () => {

  useEffect(() => {
    axios.get(`${API_URL}/articles`)
      .then(data => console.log(data))
  }, [])


  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      {/* <Route path="/about" element={<About />} /> */}
    </Routes>
  );
}

export default App;
