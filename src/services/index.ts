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

export const getCurrentPageByName = async (
  page: number,
  name: string | undefined
) => {
  const response: AxiosResponse<GetApiData> = await axios.get(
    `https://rickandmortyapi.com/api/character/?page=${page}&name=${name}`
  );
  const data = await response.data;
  return data;
};
export const getCurrentPageByStatus = async (
  page: number,
  status: string | undefined
) => {
  const response: AxiosResponse<GetApiData> = await axios.get(
    `https://rickandmortyapi.com/api/character/?page=${page}&status=${status}`
  );
  const data = await response.data;
  return data;
};
export const getCurrentPageBySpecies = async (
  page: number,
  specie: string | undefined
) => {
  const response: AxiosResponse<GetApiData> = await axios.get(
    `https://rickandmortyapi.com/api/character/?page=${page}&species=${specie}`
  );
  const data = await response.data;
  return data;
};
