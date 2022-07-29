import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Header Scroll
let nav = document.querySelector('.navbar');
window.onscroll = function () {
  if (document.documentElement.scrollTop > 50) {
    nav.classList.add('header-scrolled');
  } else {
    nav.classList.remove('header-scrolled');
  }
};

// nav hide
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function (a) {
  a.addEventListener('click', function () {
    navCollapse.classList.remove('show');
  });
});
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
