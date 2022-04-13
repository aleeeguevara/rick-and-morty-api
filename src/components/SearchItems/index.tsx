import * as React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/system";
import { ThemeRick } from "../../theme";
import SearchIcon from "@mui/icons-material/Search";
import { SelectChangeEvent } from "@mui/material";
import { Search, StyledInputBase } from "../../components/Header/styles";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";

interface SearchProps {
  name: string;
  status: string;
  setName: (name: string) => void;
  getItemsByParams: () => void;
  handleStatus: (e: SelectChangeEvent) => void;
}

export default function SearchItems({
  name,
  status,
  setName,
  getItemsByParams,
  handleStatus,
}: SearchProps) {
  const theme = useTheme(ThemeRick);

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "grid",
        justifyContent: "end",
        grid: "40px / 40% 50% 10%",
        padding: "1rem",
      }}
    >
      <Select value={status} label="Status" onChange={handleStatus}>
        <MenuItem value={"Alive"}>Alive</MenuItem>
        <MenuItem value={"Dead"}>Dead</MenuItem>
        <MenuItem value={"Unknown"}>Unknown</MenuItem>
      </Select>
      <Search>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Search>
      <Button sx={{ width: "100px" }} onClick={() => getItemsByParams()}>
        <SearchIcon color="primary" />
      </Button>
    </Box>
  );
}
