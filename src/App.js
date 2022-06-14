import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Watchlist } from "./components/Watchlist";
import { Welcome } from "./components/Welcome";
import { Watched } from "./components/Watched";
import { Add } from "./components/Add";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";
import LandingPage from './components/pages/LandingPage'
import { GlobalProvider } from "./context/GlobalState";
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage'

import './App.css'

function App() {
  return (
    
    <GlobalProvider>
      <Router>
          
        <Routes>
        {/* <Route exact path="/" component={<Welcome/>} /> */}
        <Route exact path="/" element={<LoginPage/>} />
        <Route exact path="/LoginPage" element={<LoginPage/>} />
        <Route exact path="/header" element={<Header/>} />
        <Route exact path="/watchlist" element={<Watchlist />} />
        <Route exact path="/add" element={<Add />} />
        <Route exact path="/watched" element={<Watched />} />
        <Route path="/register" element={ <RegisterPage />} />
        <Route path="/forget-password" element={ <ForgetPasswordPage />} />
           
          
      
          
        </Routes>
      </Router>
    </GlobalProvider>
  );
  
}

export default App;
