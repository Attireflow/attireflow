import { useState } from "react";
import "boxicons";
import { Route, Routes } from "react-router-dom";
import { Footer, Nav, Home } from "./components";
import AppRoutes from "./routes";

function App() {
  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
