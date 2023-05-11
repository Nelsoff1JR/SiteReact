import './App.css'
import Header from './Header'
import SideNav from './SideNav'
import Main from './Main'
import Footer from './Footer'
import { useEffect } from 'react'

export default function App() {

  useEffect(() => {
    let menuIconEl = document.querySelector('.menu-icon');
    let sidenav = document.querySelector('.sidenav');
    let sidenavCloseEl = document.querySelector('.sidenav__close-icon');

    // Open the side nav on click
    menuIconEl.addEventListener('click', function() {
      sidenav.classList.add('active');
    });

    // Close the side nav on click
    sidenavCloseEl.addEventListener('click', function() {
      sidenav.classList.remove('active');
    });
  })
  
  return (
    <>
      <Header/>
      <SideNav/>
      <Main/>
      <Footer/>
    </>
  )
}
