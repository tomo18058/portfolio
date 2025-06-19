import React from 'react'
import AppRouter from './Router'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
)
