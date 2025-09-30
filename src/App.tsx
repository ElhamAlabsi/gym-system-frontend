import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Componentes/Navbar';
import Home from './screens/Home'
import AboutUs from './screens/AboutUs'
import MemberPlans from './screens/MemberPlans';
import Trainers from './screens/Trainers';
import Programes from './screens/WhyPulseGym';
import Signup from './screens/Signup';
import  LogIn  from './screens/Login';
import Login from './screens/Login';




export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/AboutUs' element={<AboutUs />}></Route>
        <Route path='/MemberPlans' element={<MemberPlans />}></Route>
        <Route path='/Trainers' element={<Trainers />}></Route>
        <Route path='/Programes' element={<Programes />}></Route>

        <Route path='Signup' element={<Signup/>}></Route>
        <Route path='/Login' element={<Login/>} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

