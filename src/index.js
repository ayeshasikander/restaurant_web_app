import React from 'react';
import ReactDOM from 'react-dom/client';
import About from './components/About';
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
  <Routes>
    <Route exact path='/' element={<App/>}/>
    <Route exact path='/about' element={<About/>}/>
  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
