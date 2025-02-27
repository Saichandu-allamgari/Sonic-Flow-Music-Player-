import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { AuthProvider} from "./components/auth/Auth.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <SnackbarProvider>
        <AuthProvider>
        <App />
        </AuthProvider>
        
      </SnackbarProvider>
    </StrictMode>
    
  </BrowserRouter>
);
