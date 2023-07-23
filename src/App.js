import jwtHandler from 'functions/authorization/jwtHandler';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginScreen from './components/LoginScreen/LoginScreen';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';
import MainWrapper from 'components/MainWrapper/MainWrapper';
import Menu from 'components/Menu/Menu';
import { useLocation } from 'react-router-dom';




const App = () => {

  jwtHandler(localStorage.getItem('jwt'))

  const Inner= () =>{

   
   let location = useLocation();
   useEffect(() => {
    const path = location.pathname === `/` ? '/menu' : location.pathname;
    localStorage.setItem('pathToRefresh', path);
  }, [location]);
   // useEffect(()=>{
   //   const path = location.pathname === `/` ? '/menu' : location.pathname
   //   console.log('jestes na scierzce',location.pathname);
   //   localStorage.setItem('pathToRefresh',path)
//
   // },[location])

    return(
    <Routes>
    <Route exact path='/' element={<WelcomeScreen />} />
    <Route exact path='/login' element={<LoginScreen />} />
    <Route exact path='/menu' element={<ProtectedRoute source={<Menu />}/>} />
    <Route exact path='/main' element={<ProtectedRoute source={<MainWrapper />}/>} />
     {/* Fallback route */}
    <Route path='*' element={<h1>ERROR 404</h1>} />
    </Routes>
    )
  }

  return (
    <Router basename='/agenda'>
     <Inner />
    </Router>
  )
}

export default App