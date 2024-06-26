import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact_us from './Pages/Contact_us';
import Header from './Components/Header';
import Footer from './Components/Footer';
import GlobalStyle from './utils/GlobalStyle/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/about' element={ <About/> } />
        <Route path='/contact_us' element={ <Contact_us/> } />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
)
