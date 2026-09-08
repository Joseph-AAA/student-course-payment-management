import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { PaymentProvider } from "./context/PaymentContext.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PaymentProvider>
          <BrowserRouter>
         <App />
      </BrowserRouter>
    </PaymentProvider>
    
   
  </StrictMode>,
)
