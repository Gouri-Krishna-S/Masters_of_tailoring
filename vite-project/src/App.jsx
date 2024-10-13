import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Site from "./Components/Site";
import Register from "./Components/Register";
import Login from "./Components/Login";
import MainProductPage from "./Components/MainProductPage";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';
// import { useCollectionData } from 'react-firebase-hooks/firestore';

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
  }

  ])
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}


export default App;