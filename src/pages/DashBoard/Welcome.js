import React, { useContext, useEffect, useState } from 'react'
import { getUserRole } from '../../api/user'
import { AuthContext } from '../../contexts/AuthProvider'

const Welcome = () => {
  const { user } = useContext(AuthContext)
  const [role, setRole] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    getUserRole(user?.email).then(data => {
      setRole(data)
      setLoading(false)
    })
  }, [user])
  // console.log(role)
  return (
    <div className='h-screen text-gray-700 flex flex-col justify-center items-center pb-16'>
      <div className='flex justify-center items-center'>
        <p className='lg:text-6xl text-4xl font-bold'>Welco</p>
        <p className='lg:text-6xl text-4xl font-bold mr-2'>me</p>
        <p className='lg:text-6xl text-4xl font-bold'>To</p>
      </div>
      <div className='flex justify-center text-gray-500 items-center mt-4'>
        {!loading && role ? (
          <>
            {role === 'admin' ? (
              <p className='md::text-3xl text-2xl font-medium'>Admin Dashboard</p>
            ) : (
              <p className='md:text-3xl text-2xl font-medium'>Seller Dashboard</p>
            )}
          </>
        ) : (
          <p className='md:text-3xl text-2xl font-medium'>User Dashboard</p>
        )}
      </div>
    </div>
  )
}

export default Welcome
