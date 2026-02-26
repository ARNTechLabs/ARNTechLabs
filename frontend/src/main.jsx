import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import { RouterProvider } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'

import my_router from './router/router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={my_router} />
    </AuthProvider>
  </StrictMode>,
)