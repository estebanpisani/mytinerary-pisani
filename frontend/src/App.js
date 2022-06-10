import './App.css';
import NavBar from './components/NavBar';
import { Footer } from './components/Footer';
import './styles/styles.css'
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cities' element={<Hero  subtitle='COMING SOON' button='Back!' slogan={false} linkUrl='/' />}/>
        <Route path='/*' element={<Hero subtitle='Content Not Found' button='Back!' slogan={false} linkUrl='/' />}   />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
