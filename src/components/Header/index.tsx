import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { useTheme } from "@mui/system";
import { ThemeRick } from "../../theme";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import { Container } from "@mui/material";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import HomeIcon from "@mui/icons-material/Home";

export default function Header() {
  const theme = useTheme(ThemeRick);

  return (
    <Box sx={{ flexGrow: 1, minWidth: "350px" }}>
      <AppBar
        position="static"
        sx={{ background: `${theme.palette.background.default}` }}
      >
        <Toolbar sx={{ display: "grid", grid: "100% / 80% 20%" }}>
          <Link to="/">
            <img
              src={process.env.PUBLIC_URL + "/rick-and-morty.png"}
              alt="logo rick-and-morty"
              style={{
                width: "200px",
                height: "50px",
              }}
            />
          </Link>
          <Container
            sx={{
              display: "grid",
              grid: "100%/ 1fr 1fr 1fr 1fr 1fr",
              alignItems: "center",
              justifyContent: "end",
            }}
          >
            <Link title="Home" to="/">
              <HomeIcon color="secondary" />
            </Link>
            <Link title="Order by Id" to="/characters">
              <PersonIcon color="secondary" />
            </Link>
            <Link title="Search by Name" to="/search-by-name">
              <BorderColorIcon color="secondary" />
            </Link>
            <Link title="Search by status" to="/search-by-status">
              <MonitorHeartIcon color="secondary" />
            </Link>
            <Link title="Search by Species" to="/search-by-species">
              <AccessibilityNewIcon color="secondary" />
            </Link>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
