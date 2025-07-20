import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ProductContext from "./context/ProductContext.jsx";
createRoot(document.getElementById("root")).render(
  <ProductContext>
    <BrowserRouter>
      <App />
      <ToastContainer />
    </BrowserRouter>
  </ProductContext> 
);
