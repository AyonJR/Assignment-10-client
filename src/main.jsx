import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; // Import from "react-router-dom" instead of "react-router-dom"
import Home from './Home.jsx';
import Root from './Root.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import AuthProvider from './AuthProvider.jsx';
import AddTouristSpot from './AddTouristSpot.jsx';
import AddingTouristSpot from './AddingTouristSpot.jsx';
import AllTouristSpot from './AllTouristSpot.jsx';
import MyListPage from './MyListPage.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import ViewDetails from './ViewDetails.jsx';
import NotFound from './NotFound.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:() => fetch('http://localhost:5000/addSpot'),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addTouristSpot",
        element: <PrivateRoute><AddingTouristSpot></AddingTouristSpot></PrivateRoute>,
      },
      {
        path: "/allTouristSpot",
        element: <AllTouristSpot></AllTouristSpot>,
      },
      {
        path: "/myListPage",
        element:<MyListPage></MyListPage>,
        // loader: ({params})=> fetch(`http://localhost:5000/addSpot/${params.email}`)
      },
      {
        path: "/viewDetails/:id", 
        element:<ViewDetails></ViewDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/addSpot/${params.id}`)
        
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>
)
