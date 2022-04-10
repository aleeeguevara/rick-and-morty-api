import React from "react";
import {
  Avatar,
  Container,
  Grid,
  Pagination,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { UseApi } from "../../hooks/useApi";
import { getCurrentPage } from "../../services/index";
import styled from "@emotion/styled";

export const Home = () => {
  const { payload, page, setPage } = UseApi();
  console.log(page);
  return (
    <Container sx={{ margin: "2rem", display: "grid" }}>
      <Grid container spacing={3}>
        {payload?.results.map((result) => (
          <Grid item sm={3} sx={{ minWidth: "250px" }} key={result.id}>
            <Paper elevation={3}>
              <Avatar
                alt={result.name}
                src={result.image}
                sx={{ width: 150, height: 150 }}
              />
              <Typography variant="h6" component="h3">
                {result.name}
              </Typography>
              <Typography variant="body1" component="p">
                {result.status}
              </Typography>
            </Paper>
          </Grid>
        ))}
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
