import React, { useEffect } from 'react'
import axios from 'axios';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import Home from './pages/Home';
import { API_URL } from './libs/config';
import Menu from './components/Menu';
import Footer from './components/Footer';

const App = () => {

  useEffect(() => {
    axios.get(`${API_URL}/articles`)
      .then(data => console.log(data))
  }, [])


  return (
    <>
      <Menu/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </main>
      <Footer/>
    </>
  );
}

export default App;
