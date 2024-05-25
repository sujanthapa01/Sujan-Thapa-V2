import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import './index.css'
import Layout from './layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <App/>
  </React.StrictMode>,
)
  
  
  
  
  
  