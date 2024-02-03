import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import LeaderboardPage from './pages/LeaderboardPage.tsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "leaderboard",
    element: <LeaderboardPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
