import React from "react";
import { Container, Grid, Pagination } from "@mui/material";
import { UseApi } from "../../hooks/useApi";
import { getCurrentPage } from "../../services/index";
import styled from "@emotion/styled";
import { Cards } from "../../components/Cards";
import { Result } from "../../types";

export const Characters = () => {
  const { payload, page, setPage } = UseApi();

  return (
    <Container sx={{ margin: "2rem", display: "grid" }} maxWidth={false}>
      <Grid container spacing={3} sx={{ justifyContent: "center" }}>
        {payload?.results.map((result: Result) => (
          <Cards result={result} key={result.id} />
        ))}
        ;
      </Grid>
      <PaginationContainer>
        <Pagination
          count={payload?.info.pages}
          color="primary"
          page={page}
          onChange={(event, page) => {
            setPage(page);
            getCurrentPage(page);
          }}
        />
      </PaginationContainer>
    </Container>
  );
};

const PaginationContainer = styled.div`
  display: grid;
  justify-content: end;
`;
