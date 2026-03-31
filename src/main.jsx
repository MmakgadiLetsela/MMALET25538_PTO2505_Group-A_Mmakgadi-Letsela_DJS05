import { createRoot } from 'react-dom/client'
import './styles/HomeStyles.css'
import './styles/DetailStyles.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
