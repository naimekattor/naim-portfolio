import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import CursorMagicClient from './Components/MagicCursor.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    <CursorMagicClient />
  </BrowserRouter>,
)
