import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import Product from './Components/Product/Product.jsx'
import Solutions from './Components/Solution/Solutions.jsx';
import Home from './Components/Home/Home.jsx';
import AuthComp from './Components/Authantication/Auth.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/">
      {/* <Routes>
        <Route path="/" element={<App />} >
          <Route path="" element={<Home />} />
          <Route path="/Solutions" element={<Solutions />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/shistrack/About" element={<About />} />
        </Route >
      </Routes> */}

      <AuthComp />
    </BrowserRouter>
  </StrictMode>,
)
