import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Layout/Root.jsx';
import Home from './Components/Home/Home.jsx';
import FAQ from './Components/Faq/FAQ.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
      {
        index: true,
        Component: Home
      },
      {
        path:'faq',
        Component: FAQ
      }
      

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />,

  </StrictMode>,
)
