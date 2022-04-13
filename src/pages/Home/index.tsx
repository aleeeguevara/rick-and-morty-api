import React, { useState } from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/system";
import { ThemeRick } from "../../theme";
import { getNameAndStatus } from "../../services";
import SearchItems from "../../components/SearchItems";
import { SearchItemsHook } from "../../hooks/SearchItemsHook";
import { Cards } from "../../components/Cards";
import { Container, Typography } from "@mui/material";
import { Result } from "../../types";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

export default function Home() {
  const theme = useTheme(ThemeRick);
  const {
    name,
    setName,
    status,
    payloadSearched,
    setPayloadSearched,
    handleStatus,
  } = SearchItemsHook();
  const [error, setError] = useState("");

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

  console.log("trouxe", payloadSearched);

  return (
    <Container>
      <SearchItems
        name={name}
        status={status}
        setName={setName}
        getItemsByParams={getItemsByParams}
        handleStatus={handleStatus}
        setError={setError}
      />
      <Container>
        {payloadSearched?.results.map((result: Result) => (
          <Cards result={result} key={result.id} />
        ))}

        {payloadSearched?.results.length === 0 && error === "erro" && (
          <Typography variant="h2" component="h2" color="primary">
            <SentimentVeryDissatisfiedIcon sx={{ fontSize: "50px" }} />
            {` Sorry! Could you try another name?  we couldn't find "${name}".`}
          </Typography>
        )}
      </Container>
    </Container>
  );
}
