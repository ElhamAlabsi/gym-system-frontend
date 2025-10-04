import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Componentes/Navbar';
import FirstPage from './screens/FirstPage'
import AboutUs from './screens/AboutUs'
import MemberPlans from './screens/MemberPlans';
import Trainers from './screens/Trainers';
import Programes from './screens/WhyPulseGym';
import Signup from './screens/Signup';
import  LogIn  from './screens/Login';
import Login from './screens/Login';
import AllUseres from './screens/AllUseres';
import { AuthProvider } from './Contexts/AuthContext';
import Home from './screens/Home';





export default function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<FirstPage />}></Route>
        <Route path='/AboutUs' element={<AboutUs />}></Route>
        <Route path='/MemberPlans' element={<MemberPlans />}></Route>
        <Route path='/Trainers' element={<Trainers />}></Route>
        <Route path='/Programes' element={<Programes />}></Route>
        <Route path='Signup' element={<Signup/>}></Route>
        <Route path='/Login' element={<Login/>} ></Route>
        <Route path='/AllUseres' element={<AllUseres/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

