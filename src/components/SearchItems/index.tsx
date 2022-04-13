import * as React from "react";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import { Container, SelectChangeEvent } from "@mui/material";
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
  setError: (error: string) => void;
  setPage: (number: number) => void;
}

export default function SearchItems({
  name,
  status,
  setName,
  getItemsByParams,
  handleStatus,
  setError,
  setPage,
}: SearchProps) {
  return (
    <Container
      sx={{
        display: "grid",
        justifyContent: "end",
        minWidth: "400px",
        flexGrow: 1,
      }}
    >
      <Box
        sx={{
          display: "grid",
          grid: "40px / 2fr 3fr 40px",
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
            onClick={() => setError("")}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Search>
        <Button
          sx={{ width: "5px" }}
          onClick={() => {
            getItemsByParams();
            setName("");
            setPage(1);
          }}
        >
          <SearchIcon color="primary" sx={{ fontSize: "30px" }} />
        </Button>
      </Box>
    </Container>
  );
}
