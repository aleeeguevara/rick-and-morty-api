import axios, { AxiosResponse } from "axios";
import { GetApiData } from "../types";

export const getCurrentPage = async (page: number) => {
  const response: AxiosResponse<GetApiData> = await axios.get(
    `https://rickandmortyapi.com/api/character?page=${page}`
  );
  const data = await response.data;
  return data;
};
