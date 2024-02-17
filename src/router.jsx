import { createBrowserRouter } from 'react-router-dom'
import { Navbar } from './components'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Navbar />,
    }
])