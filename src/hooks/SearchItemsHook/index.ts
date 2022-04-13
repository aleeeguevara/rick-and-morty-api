import { SelectChangeEvent } from "@mui/material";
import React, { useState } from "react";
import { GetApiData } from "../../types";

export const SearchItemsHook = () => {
  const [status, setStatus] = useState("Alive");
  const [name, setName] = useState("");
  const [payloadSearched, setPayloadSearched] = useState<GetApiData>();

  const handleStatus = (e: SelectChangeEvent) => {
    setStatus(e.target.value);
  };

  return {
    name,
    setName,
    status,
    setStatus,
    payloadSearched,
    setPayloadSearched,
    handleStatus,
  };
};
