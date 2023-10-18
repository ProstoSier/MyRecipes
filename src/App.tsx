import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Home } from './pages/Home';
import { Breakfast } from './pages/Breakfast';
import { Lunch } from './pages/Lunch';
import { Dinner } from './pages/Dinner';
import { Navbar } from './components/Navbar';
import styles from './page.module.css';
import { Header }  from './components/Header';
import { Footer } from './components/Footer';

function App() {
  return (
  <div className={styles.wrapper}>
    <Header></Header>
    <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/breakfast' element={<Breakfast />}></Route>
        <Route path='/lunch' element={<Lunch />}></Route>
        <Route path='/dinner' element={<Dinner />}></Route>
      </Routes>
    <Footer></Footer>
  </div>
  )
}

export default App;
