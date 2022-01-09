import logo from "./logo.svg";
import Nav from "./components/Navigation/Navigation";
import Main from "./components/Main/Main";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from './components/Footer/Footer';
import "./App.css";

function App() {
  return (
    <div className="bg-gradient-to-r from-black to-gray-900">
      <Nav />
      <Main />
      <Skills />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
