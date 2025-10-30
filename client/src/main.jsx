import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Targetgame from './pages/Targetgame.jsx'
import Home from './pages/Home.jsx'
import CommonNumbers from './pages/CommonNumbers.jsx'
import DreamNumbers from './pages/DreamNumbers.jsx'
import Analytics from './pages/Analytics.jsx'
import PreviousResult from './pages/PreviousResult.jsx'
import ReputedCounter from './pages/ReputedCounter.jsx'
import TeerCalendar from './pages/TeerCalendar.jsx'
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'
import Login from './admin/pages/Login.jsx'
import Admin from './admin/pages/Admin.jsx'
import ChangePassword from './admin/pages/ChangePass.jsx'
import {
  ProtectRoute,
  AuthenticatedUserRoute
} from "./utils/userAuthenticated.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/common-numbers",
        element: <CommonNumbers />
      },
      {
        path: "/dream-numbers",
        element: <DreamNumbers />
      },
      {
        path: "/analytics",
        element: <Analytics />
      },
      {
        path: "/previous-results",
        element: <PreviousResult />
      },
      {
        path: "/reputedcounter",
        element: <ReputedCounter />
      },
      {
        path: "/teer-calendar",
        element: <TeerCalendar />
      },
      {
        path: "/targetgame",
        element: <Targetgame />
      },
      {
        path: "/privacy",
        element: <Privacy />
      },
      {
        path: "/terms",
        element: <Terms />
      },
      {
        path: "/private/admin/login",
        element: (
          <AuthenticatedUserRoute>
            <Login />
          </AuthenticatedUserRoute>
        )
      },
      {
        path: "/private/admin",
        element: (
          <ProtectRoute>
            <Admin />
          </ProtectRoute>
        )
      },
      {
        path: "/private/admin/change-password",
        element: (
          <ProtectRoute>
            <ChangePassword />
          </ProtectRoute>
        )
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
