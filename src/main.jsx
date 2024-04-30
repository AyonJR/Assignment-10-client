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
import UpdateInfo from './UpdateInfo.jsx';
import SingleCountryDetails from './SingleCountryDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:() => fetch('https://final-assignment-10.vercel.app/addSpot'),
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
        element:<PrivateRoute><MyListPage></MyListPage></PrivateRoute>,
        // loader: ({params})=> fetch(`https://final-assignment-10.vercel.app/addSpot/${params.email}`)
      },
      {
        path: "/viewDetails/:id", 
        element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader: ({params}) => fetch(`https://final-assignment-10.vercel.app/addSpot/${params.id}`)
        
      },
      {
        path:"/updateInfo/:id" ,
        element:<PrivateRoute><UpdateInfo></UpdateInfo></PrivateRoute> ,
        loader: ({params}) => fetch(`https://final-assignment-10.vercel.app/addSpot/${params.id}`)
      } ,
      {
        path: "/singleCountryDetails/:country",
        element: <SingleCountryDetails />,
        loader: ({ params }) => fetch(`https://final-assignment-10.vercel.app/countries/${params.country}`)
    }
    
   
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
