import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MemeApp from './MemeApp.jsx'
import WindowApp from './WindowApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <MemeApp /> */}
    <WindowApp />
  </StrictMode>,
)
