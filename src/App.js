import logo from "./logo.svg";
import Nav from "./components/Navigation/Navigation";
import Main from "./components/Main/Main";
import Skills from "./components/Skills/Skills";
import "./App.css";

function App() {
  return (
    <div className="bg-gradient-to-r from-black to-gray-900">
      <Nav />
      <Main />
      <Skills />
    </div>
  );
}

export default App;
