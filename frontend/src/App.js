import './App.css';
import NavBar from './components/NavBar';
import { Footer } from './components/Footer';
import './styles/styles.css'
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import Hero from './components/Hero';
import { Cities } from './pages/Cities';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes >
        <Route path='/' element={<Home className='main'/>}/>
        <Route path='/cities' element={<Cities />}/>
        <Route path='/*' element={<Hero subtitle='Content Not Found' button='Back!' slogan={false} linkUrl='/' />}   />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
