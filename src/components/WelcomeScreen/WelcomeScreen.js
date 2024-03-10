import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './WelcomeScreen.css';

const WelcomeScreen = ({ isLoggedIn, loginPending }) => {
  const [message, setMessage] = useState('');
  const [pathTo, setPathTo] = useState('/');
  const navigate = useNavigate();

  // Efekt dla aktualizacji ścieżki
  useEffect(() => {
    const pathname = localStorage.getItem('pathToRefresh');

    if (pathname && pathname !== pathTo) {
      setPathTo(pathname);
    }
  }, [pathTo]);

  // Efekt dla nawigacji
  useEffect(() => {
    // Sprawdź warunki logiki nawigacji
    if (isLoggedIn === true && loginPending === false) {
      // Zmiana nawigacji na /menu, ale tylko jeśli aktualna ścieżka to /
      if (pathTo === '/') {
        navigate('/menu');
      }
    } else if (isLoggedIn === false && loginPending === false) {
      navigate('/login');
    }
  }, [isLoggedIn, loginPending, navigate, pathTo]);

  return (
    <>
      <h1>{message}</h1>
      <h1>{pathTo.toString()}</h1>
	  <h2>{isLoggedIn.toString(), loginPending.toString()}</h2>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.socialFun.isLoggedIn,
    loginPending: state.socialFun.loginPending,
  };
};

export default connect(mapStateToProps)(WelcomeScreen);
