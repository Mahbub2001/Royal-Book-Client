import React, { useContext, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import {getUserRole } from '../api/user'
import SmallSpinner from '../components/Spinner/SmallSpinner'
import { AuthContext } from '../contexts/AuthProvider'

const SellersRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const [role, setRole] = useState(null)
  const [roleLoading, setRoleLoading] = useState(true)
  useEffect(() => {
    setRoleLoading(true)
    getUserRole(user?.email).then(data => {
      setRole(data)
      setRoleLoading(false)
    })
  }, [user])

  if (loading || roleLoading) {
    return (
      <div className='h-screen'>
        <SmallSpinner />
      </div>
    )
  }

  if (user && user.uid && role === 'seller') {
    return children
  }
  return <Navigate to='/dashboard' />
}

export default SellersRoute;
