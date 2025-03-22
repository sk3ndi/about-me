import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/Styles.scss'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from './Header';
import Hero from './Hero';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Hero />
    <Projects />
    <Contact />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
