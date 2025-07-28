import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import CounterStore from './app/CounterStore.js'
import { Provider } from 'react-redux'
// import { Counter } from './Features/Counter.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store = {CounterStore}>
      <App />
    </Provider>
  </StrictMode>,
)
