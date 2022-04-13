import React from "react";
import { Container, Pagination } from "@mui/material";
import { getCurrentPage } from "../../services/index";
import styled from "@emotion/styled";
import { GetApiData } from "../../types";

interface PropsPagination {
  page: number;
  setPage: (number: number) => void;
  payload: GetApiData | undefined;
}

export const PaginationComponent = ({
  page,
  setPage,
  payload,
}: PropsPagination) => {
  return (
    <Container sx={{ margin: "2rem", display: "grid" }}>
      <PaginationContainer>
        <Pagination
          count={payload?.info.pages}
          color="primary"
          page={page}
          onChange={(event, page) => {
            setPage(page);
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
