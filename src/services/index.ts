import axios, { AxiosResponse } from "axios";
import { GetApiData, ProfileById } from "../types";

export const getCurrentPage = async (page: number) => {
  const response: AxiosResponse<GetApiData> = await axios.get(
    `https://rickandmortyapi.com/api/character?page=${page}`
  );
  const data = await response.data;
  return data;
};
export const getNameAndStatus = async (name: string, status: string) => {
  const response: AxiosResponse<GetApiData> = await axios.get(
    `https://rickandmortyapi.com/api/character/?name=${name}&status=${status}`
  );
  const data = await response.data;
  return data;
};

export const getProfileById = async (id: string | undefined) => {
  const response: AxiosResponse<ProfileById> = await axios.get(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  const data = await response.data;
  return data;
};
