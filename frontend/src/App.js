import './App.css';
import NavBar from './components/NavBar';
import { Footer } from './components/Footer';
import './styles/styles.css'
import { Routes, Route } from 'react-router-dom';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Home from './pages/Home';
import Hero from './components/Hero';
import Cities from './pages/Cities';
import City from './pages/City';
import Login from './pages/Login';
import ScrollToTop from "react-scroll-to-top";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const myTheme = createTheme({
  palette: {
    primary: {
      main:'#00695c'
    } 
  },
});

function ScrollToTopOnNav() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}


function App() {
  ScrollToTopOnNav();
  return (
    <div className="App">
      <ThemeProvider theme={myTheme}>
        <ScrollToTop smooth component={<KeyboardDoubleArrowUpIcon/>} style={{backgroundColor: 'rgb(255,255,255, 0.5)', border: '2px solid black', display:'flex', alignItems:'center', justifyContent:'center', width:'30px', height:'30px'}}/>
        <NavBar />
        <Routes >
          <Route path='/' element={<Home className='main'/>}/>
          <Route path='/signup' element={<Login />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/logout' element={<Login />}/>
          <Route path='/cities' element={<Cities />}/>
          <Route path='/city/:id' element={<City />}/>
          <Route path='/*' element={<Hero subtitle='Content Not Found' button='Back!' slogan={false} linkUrl='/' />}   />
        </Routes>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
