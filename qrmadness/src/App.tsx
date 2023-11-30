import { RouterProvider } from 'react-router-dom'
import { router } from "./pages/Router.tsx"
import './App.css'

//try 172.16.5.4:5173 or 
function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
