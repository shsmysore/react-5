import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MemeApp from './MemeApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MemeApp />
  </StrictMode>,
)
