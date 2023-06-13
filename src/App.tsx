import './App.css'
import './index.css'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Index from './pages'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(

        <Route path='/' element={<Index />} />

    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
