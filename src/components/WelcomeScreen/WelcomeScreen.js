import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom'

const WelcomeScreen = ({isLoggedIn, loginPending}) => {

    const [message, setMessage] = useState('')
    const navigate = useNavigate();
    const pathname = localStorage.getItem('pathToRefresh');
    const pathTo = pathname === `/` ? '/menu' : pathname

    useEffect(()=>{
        setTimeout(() => {
          setMessage('The service is unavailable')
        }, 2000);

        if(isLoggedIn === true && loginPending === false){
          navigate(pathTo)
        }
        else if(isLoggedIn === false && loginPending === false){
            navigate('/login')
        }
      },[isLoggedIn, loginPending, navigate, pathTo])


  return (
    <h1>{message}</h1>
  )
}


const mapStateToProps = state => {
    return {
        isLoggedIn: state.socialFun.isLoggedIn,
        loginPending: state.socialFun.loginPending
    }
  }
export default connect(mapStateToProps)(WelcomeScreen)