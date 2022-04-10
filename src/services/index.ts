import axios from "axios";

export const getCurrentPage = async (page: number) => {
  const response = await axios.get(
    `https://rickandmortyapi.com/api/character?page=${page}`
  );
  const data = await response.data;
  return data;
};
