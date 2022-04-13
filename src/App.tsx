import React from "react";
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { ThemeRick } from "./theme";
import { GlobalStyles } from "@mui/material";
import Home from "./pages/Home";
import { Characters } from "./pages/Characters";

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
          <Route path="/characters" element={<Characters />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
