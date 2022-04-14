import React, { useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import { GetApiData } from "../../types";

export const SearchItemsHook = () => {
  const [status, setStatus] = useState("Alive");
  const [specie, setSpecie] = useState("Human");
  const [name, setName] = useState("");
  const [payloadSearched, setPayloadSearched] = useState<GetApiData>();

  const handleStatus = (e: SelectChangeEvent) => {
    setStatus(e.target.value);
  };
  const handleSpecies = (e: SelectChangeEvent) => {
    setSpecie(e.target.value);
  };

  return {
    name,
    setName,
    status,
    setStatus,
    payloadSearched,
    setPayloadSearched,
    handleStatus,
    handleSpecies,
    specie,
  };
};
