import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import Navbar from './components/Navbar'
import Footer from "./components/Footer"
import PageNotFound from "./pages/PageNotFound"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import { useState } from "react"
import AuthRedirect from "./auth/AuthRedirect"

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const privateRouting = ({ element }) => {
    return isAuthenticated ? element : <Navigate to='/login' />
  }
  
  const router = createBrowserRouter([
    // <AuthRedirect setIsAuthenticated={setIsAuthenticated} />
    {
      path: '/', element: (<Navigate to='/login' />)
    },
    {
      path: '/login', element: (<Login />)
    },
    {
      path: '/signup', element: (<Signup />)
    },
    {
      path: '/home',
      element: (
        <privateRouting>
          <>
            <Navbar />
            <Home />
            <Footer />
          </>
        </privateRouting>
      )
    },
    {
      path: '*',
      element: (
        <PageNotFound />
      )
    }
  ])

  return (
    <>
          {/* <AuthRedirect setIsAuthenticated={setIsAuthenticated} /> */}
    <RouterProvider router={router} />
    </>
  )
}

export default App
