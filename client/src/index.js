import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from 'react-router-dom';  // Import BrowserRouter
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>  {/* Pass the store to the Provider */}
    <React.StrictMode>
      <Router>  {/* Wrap your app with Router */}
        <App />
      </Router>
    </React.StrictMode>
  </Provider>
);

reportWebVitals();
