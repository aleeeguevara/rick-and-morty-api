import React from "react";
import { Container, Grid, Pagination, Paper } from "@mui/material";
import { UseApi } from "../../hooks/useApi";
import { getCurrentPage } from "../../services/index";
import styled from "@emotion/styled";
import { Cards } from "../../components/Cards";
import { Result } from "../../types";

export const Search = () => {
  const { searchFor, option, page, setPage } = UseApi();

  return (
    <Container sx={{ margin: "2rem", display: "grid" }} maxWidth={false}>
      <PaginationContainer>
        <Pagination
          // count={searchFor?.info.pages}
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

// <Grid container spacing={3} sx={{ justifyContent: "center" }}>
// {option === "status" &&
//   searchFor?.map((result: Result) => (
//     <Cards result={result} key={result.id} />
//   ))}
// {option === "name" && (
//   <Paper>
//     <p>{searchFor}</p>
//   </Paper>
// )}
// </Grid>
