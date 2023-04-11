import { useState } from "react";
import "./App.css";
import React from "react";
import { Error } from "./components/error";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { List } from "./components/list";
import { Form } from "./components/form";
import { Login } from "./components/login";
import ErrorBoundary from "./errorBoundary";
function App() {
  return (
    <ErrorBoundary>
    <Router>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/form" element={<Form />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
    </ErrorBoundary>
  );
}

export default App;
