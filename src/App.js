import Header from './Components/Header';
import './App.css';
import React, {useState,useEffect} from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Error from './Components/Error';
import Email from './Components/Email';
import Instagram from './Components/Instagram';
import UserDetails from './Components/UserDetails';
function App() {

  return (
    <Router>
    <div>
    <Header/>
    
    <Routes>
          { /*HOME*/}
          <Route>
          <Route index  element={<Home/>}/>

          <Route path="/app" element={<Home/>}/>
          </Route>

          <Route path="/app/:userId" element={<UserDetails />} />

            {/*ABOUT*/}
          <Route path="/about" element={<About/>}/>
            
            {/*CONTACT*/}
          <Route path="/contact" element={<Contact/>}>
            <Route index element={<Instagram/>}/>
            <Route path='Instagram' element={<Instagram/>}/>
            <Route path='Email' element={<Email/>}/>
            </Route>

           {/*ERROR*/}
           <Route path="*" element={<Error/>}/>
           
        </Routes>
    </div>
    </Router>
  );
}
export default App;
