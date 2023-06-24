import React from 'react';
import ReactDOM from 'react-dom/client';
import Enroll from './components/Enroll';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route index element={<App/>}/>
        <Route to='/enroll' element={<Enroll/>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

