import React from "react";
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { Home } from "./pages/Home";
import { ThemeRick } from "./theme";
import { GlobalStyles } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={ThemeRick}>
      <GlobalStyles
        styles={{
          body: {
            background: "#242221",
            overflowX: "hidden",
          },
        }}
      />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
