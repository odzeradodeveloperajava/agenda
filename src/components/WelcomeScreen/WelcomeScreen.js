import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom'

const WelcomeScreen = ({isLoggedIn, loginPending}) => {

    const [message, setMessage] = useState('')
    const navigate = useNavigate();

    const [pathToRefresh, setPathToRefresh] = useState('/menu')

    useEffect(()=>{
      console.log('odpalam welcome screen')
      const path = localStorage.getItem('pathToRefresh')
      console.log('odczyt path > uzyty do navigate ',path)
      const x = () => path !== null || path !== `/`  ? setPathToRefresh(path) : null;
      x()
    })

    useEffect(()=>{
        setTimeout(() => {
          setMessage('The service is unavailable')
        }, 2000);

        if(isLoggedIn === true && loginPending === false){
          navigate(pathToRefresh)
        }
        else if(isLoggedIn === false && loginPending === false){
            navigate('/login')
        }
      },[isLoggedIn, loginPending, navigate])


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