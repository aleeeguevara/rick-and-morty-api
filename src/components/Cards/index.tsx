import React from "react";
import { Avatar, Grid, Paper, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { Result } from "../../types";
import { useTheme } from "@mui/system";
import { ThemeRick } from "../../theme/index";

interface ICards {
  result: Result;
}

export const Cards = ({ result }: ICards) => {
  const theme = useTheme(ThemeRick);
  return (
    <Grid item sm={4} sx={{ minWidth: "350px" }} key={result.id}>
      <Paper
        elevation={3}
        sx={{
          border: `2px solid${theme.palette.primary.main}`,
          display: "grid",
          grid: "100%/ 50% 50%",
          height: "200px",
          padding: "1rem",
          minWidth: "350px",
        }}
      >
        <Avatar
          alt={result.name}
          src={result.image}
          sx={{ width: 150, height: 150 }}
        />
        <CardContainer>
          <Typography variant="h6" component="h3">
            {result.name}
          </Typography>
          <Typography variant="body1" component="p">
            {result.status}
          </Typography>
          <Typography variant="body1" component="p">
            {result.species}
          </Typography>
        </CardContainer>
      </Paper>
    </Grid>
  );
};

const CardContainer = styled.div`
  display: grid;
  grid: 50% 25% 25% / 100%;
`;
