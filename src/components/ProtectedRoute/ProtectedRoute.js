import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import MainWrapper from 'components/MainWrapper/MainWrapper'

const ProtectedRoute = ({isLoggedIn, source}) => {
    return (isLoggedIn === true ? source : <Navigate to='/' />)
}
const mapStateToProps = state => {
    return {
        isLoggedIn: state.socialFun.isLoggedIn
    }
  }

export default connect(mapStateToProps)(ProtectedRoute)