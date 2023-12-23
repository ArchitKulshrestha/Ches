import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppEureka from "./AppEureka.jsx";
import { AuthProvider } from "./Context/AuthProvider.jsx";
import Login from "./ComponentsEureka/Login.jsx";
import Upload from "./ComponentsEureka/FileUploadForm.jsx";
import "./index.css";
import PortalUploadPage from "./ComponentsEureka/PortalUploadPage.jsx";
import ApiComponent from "./ComponentsEureka/ApiComponent.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="eureka" element={<AppEureka />} />
           <Route path="Upload" element={ <PortalUploadPage/>} />
          <Route path="login" element={<Login />} />
          <Route path="data" element={<ApiComponent />} /> 
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
