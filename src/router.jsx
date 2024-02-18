import { createBrowserRouter } from 'react-router-dom'
import { Navbar, SignIn, SignUp } from './components'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Navbar />,
    },
    {
        path: '/signin',
        element: <SignIn />
    },
    {
        path: '/signup',
        element: <SignUp />,
    }
])