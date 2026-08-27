import React, { useEffect, useState } from 'react'

const App = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }

        return response.json()
      })
      .then((result) => {
        setData(result)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return (
    <div id="main">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error occurred: {error}</p>
      ) : data ? (
        <>
          <p>Data Fetched from API</p>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
      ) : (
        <p>No data found</p>
      )}
    </div>
  )
}

export default App