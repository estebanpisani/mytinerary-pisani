import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import './styles/styles.css'
import CarouselSection from './components/CarouselSection';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <CarouselSection />
    </div>
  );
}

export default App;
