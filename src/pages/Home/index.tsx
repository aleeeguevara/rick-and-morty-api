import * as React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/system";
import { ThemeRick } from "../../theme";
import { getNameAndStatus } from "../../services";
import SearchItems from "../../components/SearchItems";
import { SearchItemsHook } from "../../hooks/SearchItemsHook";

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

  const getItemsByParams = async () => {
    if (name.length > 2) {
      const data = await getNameAndStatus(name, status);
      setPayloadSearched(data);
      setName("");
    }
  };

  console.log("trouxe", payloadSearched);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <SearchItems
        name={name}
        status={status}
        setName={setName}
        getItemsByParams={getItemsByParams}
        handleStatus={handleStatus}
      />
      carfds
    </Box>
  );
}
