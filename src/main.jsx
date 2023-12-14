import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppEureka from "./AppEureka.jsx";
import { AuthProvider } from "./Context/AuthProvider.jsx";
import Login from "./ComponentsEureka/Login.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="eureka" element={<AppEureka />} />

          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
