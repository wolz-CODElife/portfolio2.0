import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'aos/dist/aos.css';

import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './routers/Home';
import Apps from './routers/Apps';
import Articles from './routers/Articles';
import Presentations from './routers/Presentations';
import Loader from './components/Loader';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }, 
  {
    path: "/apps",
    element: <Apps />
  },
  {
    path: "/articles",
    element: <Articles />
  },
  {
    path: "/presentations",
    element: <Presentations />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>
);

function Application() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
}, [])

  return ( 
    <>
    {loading ? 
    <Loader />
    : 
    <RouterProvider router={router} />
    }
    </>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
