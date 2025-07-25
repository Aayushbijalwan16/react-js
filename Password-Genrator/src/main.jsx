import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Footer from './components/footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Footer />
  </StrictMode>,
)
