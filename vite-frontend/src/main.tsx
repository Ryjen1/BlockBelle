import React from 'react'
import ReactDOM from 'react-dom/client'
import '@rainbow-me/rainbowkit/styles.css'
import App from './App'
import './index.css'

// Suppress Chrome extension runtime errors
const originalError = console.error
console.error = (...args) => {
  // Filter out Chrome extension runtime errors
  if (args[0] && typeof args[0] === 'string' &&
      (args[0].includes('chrome.runtime.sendMessage') ||
       args[0].includes('Extension context invalidated'))) {
    return
  }
  originalError.apply(console, args)
}

// Global error handler for unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
  // Suppress specific wallet-related errors
  if (event.reason && event.reason.message &&
      (event.reason.message.includes('chrome.runtime.sendMessage') ||
       event.reason.message.includes('Extension context invalidated'))) {
    event.preventDefault()
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)