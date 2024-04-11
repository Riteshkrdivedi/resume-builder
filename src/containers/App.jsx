import React from "react";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages";
import { Auth } from "../pages";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const App = () => {
  const queryclient = new QueryClient();
  return (
    <QueryClientProvider client={queryclient}>
      <Suspense fallback={<div>Loadinggg</div>}>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Suspense>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
