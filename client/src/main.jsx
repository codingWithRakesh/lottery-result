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

const router = createBrowserRouter([
  {
    path : "/",
    element : <App />,
    children : [
      {
        path : "/",
        element : <Home />
      },
      {
        path : "/common-numbers",
        element : <CommonNumbers />
      },
      {
        path : "/dream-numbers",
        element : <DreamNumbers />
      },
      {
        path : "/analytics",
        element : <Analytics />
      },
      {
        path : "/previous-results",
        element : <PreviousResult />
      },
      {
        path : "/reputedcounter",
        element : <ReputedCounter />
      },
      {
        path : "/teer-calendar",
        element : <TeerCalendar />
      },
      {
        path : "/targetgame",
        element : <Targetgame />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
