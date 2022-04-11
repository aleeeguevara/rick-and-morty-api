import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { useTheme } from "@mui/system";
import { ThemeRick } from "../../theme";
import SearchIcon from "@mui/icons-material/Search";
import { Search, SearchIconWrapper, StyledInputBase } from "./styles";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import { Button } from "@mui/material";
import { UseApi } from "../../hooks/useApi";

export default function Header() {
  const theme = useTheme(ThemeRick);

  const { setSearched, setOption } = UseApi();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ background: `${theme.palette.background.default}` }}
      >
        <Toolbar sx={{ display: "grid", grid: "100% / 50% 10% 10% 30%" }}>
          <img
            src="rick-and-morty.png"
            alt="logo rick-and-morty"
            style={{
              width: "200px",
              height: "50px",
            }}
          />
          <Button color="secondary" onClick={() => setOption("status")}>
            <MonitorHeartIcon />
          </Button>
          <Button color="secondary" onClick={() => setOption("name")}>
            <PersonPinIcon />
          </Button>
          <Search>
            <SearchIconWrapper>
              <SearchIcon color="secondary" />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => {
                setSearched(e.target.value);
              }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
