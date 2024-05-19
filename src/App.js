import './App.css';
import About from './components/About';
import Foot from './components/Foot';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
      <Foot/>
    </div>
  );
}
export default App;
