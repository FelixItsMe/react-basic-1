import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './layouts/AppLayout.jsx'
import DashboardPage from './features/dashboard/pages/DashboardPage.jsx'
import UserPage from './features/user/pages/UserPage.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const router = createBrowserRouter([
  {
    "path": "/",
    "element": <AppLayout />,
    "children": [
      {
        "path": "/dashboard",
        "element": <DashboardPage />
      },
      {
        "path": "/user",
        "element": <UserPage />
      },
    ]
  }
])

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)
