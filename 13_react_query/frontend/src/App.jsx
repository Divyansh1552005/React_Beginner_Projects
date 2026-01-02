import React, { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"

function App() {

  const [search, setSearch] = useState("wood")
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const controller = new AbortController();
    
    const fetchProducts = async () => {
      try {
        setLoading(true)
        setError(false)

        const response = await axios.get(
          "/api/products?search=" + search,
          {signal : controller.signal}
        )

        setProducts(response.data)
      } catch (err) {
        if(axios.isCancel(error)){
          log("Request Canceled", error.message)
          return;
        }
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
    
    // cleanup functions
    return () =>{
      controller.abort()
    }
  }, [search])

  return (
    <>
      <h1>Learning some things</h1>

      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && <h1>Loading....</h1>}
      {error && <h1>Something went wrong</h1>}

      <h2>Number of products are : {products.length}</h2>
    </>
  )
}

export default App
