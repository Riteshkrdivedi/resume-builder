import React from "react";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages";
import { Auth } from "../pages";
const App = () => {
  return (
    <Suspense fallback={<div>Loadinggg</div>}>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Suspense>
  );
};

export default App;
