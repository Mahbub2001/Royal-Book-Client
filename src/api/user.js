export const getUserRole = async email => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/user/${email}`,
      {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${localStorage.getItem('royal-token')}`,
        },
      }
    )
    const user = await response.json()
    return user?.role
  }