import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { useTheme } from "@mui/system";
import { ThemeRick } from "../../theme";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";

export default function Header() {
  const theme = useTheme(ThemeRick);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ background: `${theme.palette.background.default}` }}
      >
        <Toolbar sx={{ display: "grid", grid: "100% / 90%  10%" }}>
          <Link to="/">
            <img
              src="rick-and-morty.png"
              alt="logo rick-and-morty"
              style={{
                width: "200px",
                height: "50px",
              }}
            />
          </Link>
          <Link to="/characters">
            <PersonIcon color="secondary" />
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
