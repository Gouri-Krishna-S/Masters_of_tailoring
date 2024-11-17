import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Site from "./Components/Site";
import Register from "./Components/Register";
import Login from "./Components/Login";
import MainProductPage from "./Components/MainProductPage";
import Cart from './Components/Cart';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';
import app from "./firebase";
import { auth } from "./firebase";


function App()
{

  const [user] = useAuthState(auth);
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Site isSignedIn={ user } />
    },

    {
      path: '/register',
      element: <Register />
    },

    {
      path: '/login',
      element: <Login />
    },

    {
      path: '/product/:id',
      element: <>
                  <MainProductPage props = {user}/>
               </>
    },

    {
      path: '/cart',
      element: <Cart />
    }


  ])
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}


export default App;