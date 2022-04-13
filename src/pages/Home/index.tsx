import React, { useState } from "react";
import Box from "@mui/material/Box";
import { getNameAndStatus } from "../../services";
import SearchItems from "../../components/SearchItems";
import { SearchItemsHook } from "../../hooks/SearchItemsHook";
import { Cards } from "../../components/Cards";
import { Container, Grid, Typography } from "@mui/material";
import { Result } from "../../types";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { UseApi } from "../../hooks/useApi";
import { PaginationComponent } from "../../components/pagination";

export default function Home() {
  const {
    name,
    setName,
    status,
    payloadSearched,
    setPayloadSearched,
    handleStatus,
  } = SearchItemsHook();
  const { page, setPage } = UseApi();

  const [error, setError] = useState("");
  const itemsPerpage = 10;
  const items = payloadSearched?.results;

  const getItemsByParams = async () => {
    if (name.length > 2) {
      try {
        const data = await getNameAndStatus(name, status);
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
  };

  const indexOfLastItem = page * itemsPerpage;
  const indexOffirstItem = indexOfLastItem - itemsPerpage;
  const currentPost = items?.slice(indexOffirstItem, indexOfLastItem);

  return (
    <Container sx={{ flexGrow: 1 }}>
      <SearchItems
        name={name}
        status={status}
        setName={setName}
        getItemsByParams={getItemsByParams}
        handleStatus={handleStatus}
        setError={setError}
      />
      <Grid container spacing={3} sx={{ justifyContent: "center" }}>
        {currentPost?.map((result: Result) => (
          <Cards result={result} key={result.id} />
        ))}

        {payloadSearched?.results.length === 0 && error === "erro" && (
          <Typography variant="h2" component="h2" color="primary">
            <SentimentVeryDissatisfiedIcon sx={{ fontSize: "50px" }} />
            {` Sorry! Could you try another name?  we couldn't find "${name}".`}
          </Typography>
        )}
      </Grid>
      <PaginationComponent
        page={page}
        setPage={setPage}
        payload={payloadSearched}
      />
    </Container>
  );
}
