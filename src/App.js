import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import './styles/styles.css'
import Carrousel from './components/Carrousel';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Carrousel />
    </div>
  );
}

export default App;
