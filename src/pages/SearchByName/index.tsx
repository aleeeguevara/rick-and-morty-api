import React, { useEffect, useState } from "react";
import { getCurrentPageByName } from "../../services";
import SearchIcon from "@mui/icons-material/Search";
import { SearchItemsHook } from "../../hooks/SearchItemsHook";
import { Cards } from "../../components/Cards";
import { Button, Container, Grid, Typography } from "@mui/material";
import { Result } from "../../types";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { UseApi } from "../../hooks/useApi";
import { Pagination } from "@mui/material";
import styled from "@emotion/styled";
import { Search, StyledInputBase } from "../../components/Header/styles";

export default function SearchByName() {
  const { name, setName, payloadSearched, setPayloadSearched } =
    SearchItemsHook();
  const { page, setPage } = UseApi();

  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      if (name.length > 2) {
        try {
          const data = await getCurrentPageByName(page, name);
          setPayloadSearched(data);
        } catch {
          setPayloadSearched({
            info: {
              count: 0,
              pages: 0,
              next: null,
              prev: null,
            },
            results: [],
          });
          setError("erro");
        }
      }
    })();
  }, [page, name]);
  return (
    <Container
      sx={{
        flexGrow: 1,
      }}
    >
      <Search sx={{ display: "grid", grid: "100%/ 80% 20%", margin: "1rem" }}>
        <StyledInputBase
          placeholder="Search name"
          inputProps={{ "aria-label": "search" }}
          value={name}
          onClick={() => setError("")}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Button sx={{ width: "5px" }}>
          <SearchIcon color="primary" sx={{ fontSize: "30px" }} />
        </Button>
      </Search>
      <Grid container spacing={3} sx={{ justifyContent: "center" }}>
        {payloadSearched?.results.map((result: Result) => (
          <Cards result={result} key={result.id} />
        ))}

        {payloadSearched?.results.length === 0 && error === "erro" && (
          <Typography variant="h2" component="h2" color="primary">
            <SentimentVeryDissatisfiedIcon sx={{ fontSize: "50px" }} />
            {` Sorry! Could you try another name?  we couldn't find "${name}".`}
          </Typography>
        )}
      </Grid>
      {payloadSearched !== undefined && payloadSearched.results.length >= 1 && (
        <PaginationContainer>
          <Pagination
            count={payloadSearched.info.pages}
            color="primary"
            page={page}
            onChange={(event, page) => {
              setPage(page);
              getCurrentPageByName(page, name);
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
