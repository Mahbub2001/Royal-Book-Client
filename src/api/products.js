// Add a product
export const addProducts = async productData => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/products`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('royal-token')}`,
      },
      body: JSON.stringify(productData),
    })
  
    const data = await response.json()
    return data
  }
  
  //get product by email seller
  export const getProducts = async email => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/products/${email}`,
      {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${localStorage.getItem('royal-token')}`,
        },
      }
    )
    const data = await response.json()
    return data
  }

//delete product
export const deleteProduct = async id => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/product/${id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${localStorage.getItem('royal-token')}`,
    },
  })
  const result = await response.json()
  return result
}

//report product
export const reportProduct = async reportBookData => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/reportbook`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${localStorage.getItem('royal-token')}`,
    },
    body: JSON.stringify(reportBookData),
  })

  const data = await response.json()
  return data
}

//delete reported product
export const deleteReportedProduct = async id => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/reportBook/${id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${localStorage.getItem('royal-token')}`,
    },
  })
  const result = await response.json()
  return result
}