import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';
import Contactus from './Contactus';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path='/' element={<App />} />
      <Route exact path='/about' element={<About />} />
      <Route exact path='/contact' element={< Contactus/>} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
