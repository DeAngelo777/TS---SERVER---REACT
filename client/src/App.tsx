import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContextWrapper } from "./context/GlobalContext";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import React from "react";

export function App(): JSX.Element { // Add return type for the component
  return (
    <ContextWrapper>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ContextWrapper>
  );
}
