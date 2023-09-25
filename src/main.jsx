import React from 'react'
import ReactDOM from 'react-dom/client'
import myRoute from './Router/Router'

import './index.css'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myRoute}></RouterProvider>
  </React.StrictMode>,
)
