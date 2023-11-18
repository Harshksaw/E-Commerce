import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";


import * as React from "react";
import { createRoot } from "react-dom/client";
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />


  },
  {
    path: "/signup",
    element: (<SignupPage />)
  },
  {
    path: "/login",
    element: (<LoginPage />)
  },
]);

// createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>

  )
}
export default App