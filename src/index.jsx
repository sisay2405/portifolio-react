import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from './ErrorBoundary';
import { Provider } from 'react-redux';
import App from "./App";
import store from './store';

const root = createRoot(document.getElementById("root"));

root.render(
<React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
