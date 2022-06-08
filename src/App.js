import './App.css';
import NavBar from './components/NavBar';
import { Footer } from './components/Footer';
import './styles/styles.css'
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/*' element={<NotFound />}   />
        <Route path='/' element={<Home />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
