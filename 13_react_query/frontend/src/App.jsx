import React, { useEffect, useRef, useState } from 'react'
import './App.css'
import axios from "axios"

// debounce helper
function debounce(fn, delay) {
  let timer
  return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}

function App() {

  const [search, setSearch] = useState("wood")
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  // debounced setter (stable ref)
  const debouncedSearch = useRef(
    debounce((value) => {
      setSearch(value)
    }, 400)
  ).current

  useEffect(() => {
    const controller = new AbortController()

    const fetchProducts = async () => {
      try {
        setLoading(true)
        setError(false)

        const response = await axios.get(
          `/api/products?search=${search}`,
          { signal: controller.signal }
        )

        setProducts(response.data)
      } catch (err) {
        if (err.name === "CanceledError") {
          console.log("Request canceled")
          return
        }
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()

    return () => controller.abort()
  }, [search])

  return (
    <>
      <h1>Learning some things</h1>

      <input
        type="text"
        placeholder="Search"
        defaultValue={search}
        onChange={(e) => debouncedSearch(e.target.value)}
      />

      {loading && <h1>Loading...</h1>}
      {error && <h1>Something went wrong</h1>}

      <h2>Number of products are : {products.length}</h2>
    </>
  )
}

export default App
