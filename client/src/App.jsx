import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./Pages/HomePage"
import LoginPage from "./components/login/LoginPage"

const App = () => {


  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App
