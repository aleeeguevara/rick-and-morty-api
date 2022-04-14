import React from "react";
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { ThemeRick } from "./theme";
import { GlobalStyles } from "@mui/material";
import Home from "./pages/Home";
import { Characters } from "./pages/Characters";
import Profile from "./pages/Profile";
import SearchByName from "./pages/SearchByName";
import SearchByStatus from "./pages/SearchByStatus";
import SearchBySpecies from "./pages/Species";

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
          <Route path="/:id" element={<Profile />} />
          <Route path="/search-by-name" element={<SearchByName />} />
          <Route path="/search-by-status" element={<SearchByStatus />} />
          <Route path="/search-by-species" element={<SearchBySpecies />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
