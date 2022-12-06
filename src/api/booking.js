// booking books
export const bookingBook = async bookData => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/booking`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('royal-token')}`,
      },
      body: JSON.stringify(bookData),
    })
  
    const data = await response.json()
    return data
  }
  
//getting the booking books in my orders
export const getBookings = async (email,setLoading) => {
  setLoading(true);
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/bookings/${email}`,
    {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('royal-token')}`,
      },
    }
  )
  const data = await response.json()
  setLoading(false);
  return data
}


//stripe payment
export const getPaymentIntent = async price => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/create-payment-intent`,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('royal-token')}`,
      },
      body: JSON.stringify({ price }),
    }
  )

  const data = await response.json()
  return data
}


//save data
export const savePayment = bookingData => {
  // Post method fetch
  return fetch(`${process.env.REACT_APP_API_URL}/payments`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${localStorage.getItem('royal-token')}`,
    },
    body: JSON.stringify(bookingData),
  })
}
