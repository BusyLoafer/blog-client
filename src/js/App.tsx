import React, { useEffect } from 'react'
import axios from 'axios';
import {
  Route,
  Routes,
} from "react-router-dom";
import Home from './pages/Home';
import { API_URL } from './libs/config';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Header from './components/Header';
import Contacts from './pages/Contacts/Contacts';
import Food from './pages/Food/Food';


declare global {
  interface Date {
    daysInMonth(): number;
  }
}

Date.prototype.daysInMonth = function () {
  return 33 - new Date(this.getFullYear(), this.getMonth(), 33).getDate();
};

const App = () => {

  useEffect(() => {
    // axios.get(`${API_URL}/articles`)
    //   .then(data => console.log(data))

  }, [])


  return (
    <>
      <Menu />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/food" element={<Food />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
