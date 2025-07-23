import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Greet from './greet.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Greet />
  </StrictMode>,
)
