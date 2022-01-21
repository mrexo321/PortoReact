// import logo from "./logo.svg";
import Nav from "./components/Navigation/Navigation";
import Main from "./components/Main/Main";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from './components/Footer/Footer';
import "./App.css";
import { useEffect, useState } from "react";
import Project from "./components/Project/Project";
import { render } from "react-dom";

// render( () => {

//     if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//       document.documentElement.classList.add('dark')
//     } else {
//       document.documentElement.classList.remove('dark')
//     }
// })






function App() {

  

  const [theme,setTheme] = useState('dark')
    
  

  
  
  return (
    <div className={theme == 'dark' ? 'bg-gradient-to-r from-black to-gray-900' : ''}>
      <Nav />
      <Main />
      <Skills />
      <Contact />
      <Project/>
      <Footer/>
    </div>
  );

  
}

export default App;
