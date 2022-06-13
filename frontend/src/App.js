import './App.css';
import NavBar from './components/NavBar';
import { Footer } from './components/Footer';
import './styles/styles.css'
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import Hero from './components/Hero';
import { Cities } from './pages/Cities';
import City from './pages/City';
import ScrollToTop from './components/ScrollToTop';
import data from './data'
function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <NavBar />
      <Routes >
        <Route path='/' element={<Home className='main'/>}/>
        <Route path='/cities' element={<Cities />}/>
        <Route path='/city' element={<City name={data.cities[0].name} img={data.cities[0].img} country={data.cities[0].country} />}/>
        <Route path='/*' element={<Hero subtitle='Content Not Found' button='Back!' slogan={false} linkUrl='/' />}   />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
