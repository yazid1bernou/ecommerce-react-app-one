import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <span> Home</span>
  },
  {
    path: "/products/:id",
    element: <spna> Category</spna>
  },

  {
    path: "/product/:id",
    element: <spna> Products</spna>
  },

])

function App() {


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
