import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import MainWrapper from 'components/MainWrapper/MainWrapper';

const ProtectedRoute = ({ isLoggedIn, source }) => {
  const [renderAttempted, setRenderAttempted] = useState(false);

  useEffect(() => {
    console.log('is logged in', isLoggedIn);
  }, [isLoggedIn]);

  useEffect(() => {
    setRenderAttempted(true);
  }, []);

  // Jeśli renderowanie zostało już wykonane lub użytkownik nie jest zalogowany, zwróć null
  if (!renderAttempted || isLoggedIn === null) {
    return null;
  }

  // Jeśli użytkownik nie jest zalogowany, przekieruj do /login
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  // Jeśli użytkownik jest zalogowany, renderuj komponent
  return source;
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.socialFun.isLoggedIn,
  };
};

export default connect(mapStateToProps)(ProtectedRoute);
