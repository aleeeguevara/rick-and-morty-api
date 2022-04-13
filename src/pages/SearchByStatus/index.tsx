import React, { useEffect, useState } from "react";
import { getCurrentPageByStatus } from "../../services";
import { SearchItemsHook } from "../../hooks/SearchItemsHook";
import { Cards } from "../../components/Cards";
import { Container, Grid, Select, Typography, MenuItem } from "@mui/material";
import { Result } from "../../types";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { UseApi } from "../../hooks/useApi";
import { Pagination } from "@mui/material";
import styled from "@emotion/styled";

export default function SearchByName() {
  const { status, payloadSearched, setPayloadSearched, handleStatus } =
    SearchItemsHook();
  const { page, setPage } = UseApi();

  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      if (status.length > 2) {
        try {
          const data = await getCurrentPageByStatus(page, status);
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
  }, [page, status]);
  return (
    <Container
      sx={{
        flexGrow: 1,
      }}
    >
      <Select
        value={status}
        onChange={handleStatus}
        sx={{ margin: "1rem", float: "right" }}
      >
        <MenuItem value={"Alive"}>Alive</MenuItem>
        <MenuItem value={"Dead"}>Dead</MenuItem>
        <MenuItem value={"Unknown"}>Unknown</MenuItem>
      </Select>
      <Grid container spacing={3} sx={{ justifyContent: "center" }}>
        {payloadSearched?.results.map((result: Result) => (
          <Cards result={result} key={result.id} />
        ))}

        {payloadSearched?.results.length === 0 && error === "erro" && (
          <Typography variant="h2" component="h2" color="primary">
            <SentimentVeryDissatisfiedIcon sx={{ fontSize: "50px" }} />
            {` Sorry! Could you try another status? we couldn't find "${status}".`}
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
              getCurrentPageByStatus(page, status);
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
