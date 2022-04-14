import React, { useEffect, useState } from "react";
import { getCurrentPageBySpecies } from "../../services";
import { SearchItemsHook } from "../../hooks/SearchItemsHook";
import { Cards } from "../../components/Cards";
import { Container, Grid, Select, MenuItem } from "@mui/material";
import { Result } from "../../types";
import { UseApi } from "../../hooks/useApi";
import { Pagination } from "@mui/material";
import styled from "@emotion/styled";

export default function SearchBySpecies() {
  const { payloadSearched, setPayloadSearched, specie, handleSpecies } =
    SearchItemsHook();
  const { page, setPage } = UseApi();
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      if (specie.length > 2) {
        const data = await getCurrentPageBySpecies(page, specie);
        setPayloadSearched(data);
      }
    })();
  }, [page, specie]);
  return (
    <Container
      sx={{
        flexGrow: 1,
      }}
    >
      <Select
        value={specie}
        onChange={handleSpecies}
        sx={{ margin: "1rem", float: "right" }}
      >
        <MenuItem value={"Human"}>Human</MenuItem>
        <MenuItem value={"Alien"}>Alien</MenuItem>
        <MenuItem value={"Mythological Creature"}>
          Mythological Creature
        </MenuItem>
        <MenuItem value={"Humanoid"}>Humanoid</MenuItem>
        <MenuItem value={"unknown"}>unknown</MenuItem>
        <MenuItem value={"Poopybutthole"}>Poopybutthole</MenuItem>
        <MenuItem value={"Robot"}>Robot</MenuItem>
        <MenuItem value={"Disease"}>Disease</MenuItem>
        <MenuItem value={"Animal"}>Animal</MenuItem>
        <MenuItem value={"Cronenberg"}>Cronenberg</MenuItem>
      </Select>
      <Grid container spacing={3} sx={{ justifyContent: "center" }}>
        {payloadSearched?.results.map((result: Result) => (
          <Cards result={result} key={result.id} />
        ))}
      </Grid>
      {payloadSearched !== undefined && payloadSearched.results.length >= 1 && (
        <PaginationContainer>
          <Pagination
            count={payloadSearched.info.pages}
            color="primary"
            page={page}
            onChange={(event, page) => {
              setPage(page);
              getCurrentPageBySpecies(page, specie);
            }}
          />
        </PaginationContainer>
      )}
    </Container>
  );
}

const PaginationContainer = styled.div`
  display: grid;
  justify-content: end;
`;
