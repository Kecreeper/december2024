import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Documents from './Documents.jsx'
import ErrorPage from './ErrorPage.jsx'
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/documents",
    element: <Documents />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
