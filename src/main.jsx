import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ClimaProvider } from './context/climaContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClimaProvider>
      <App />
    </ClimaProvider>
  </StrictMode>,
)
