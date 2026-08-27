import React, { useEffect, useState } from 'react'

const App = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error fetching data')
        }

        return response.json()
      })
      .then((result) => {
        setData(result)
      })
      .catch(() => {
        setError('Error fetching data')
      })
  }, [])

  return (
    <div id="main">
      {error ? (
        <p>{error}</p>
      ) : data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>No data found</p>
      )}
    </div>
  )
}

export default App