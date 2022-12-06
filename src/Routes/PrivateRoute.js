import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import Spinner from '../components/Spinner/SmallSpinner'

import { AuthContext } from '../contexts/AuthProvider'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation()
  if (loading) {
    return (
      <div className='h-screen'>
        <Spinner />
      </div>
    )
  }

  if (user && user.uid) {
    return children
  }
  return <Navigate to='/login' state={{ from: location }} replace />
}

export default PrivateRoute
