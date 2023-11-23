import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";

import App from "./App.tsx";
import { AuthProvider } from "@context/index";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <AuthProvider>
        <Routes>
          <Route
            path="/*"
            element={
              <QueryClientProvider client={queryClient}>
                <App />
                <ReactQueryDevtools />
              </QueryClientProvider>
            }
          />
        </Routes>
      </AuthProvider>
    </HashRouter>
  </React.StrictMode>
);
