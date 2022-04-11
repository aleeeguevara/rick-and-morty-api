import { getCurrentPage } from "../services";
import { Result } from "../types";

export const searchByParameter = async (
  attr: string,
  param: string,
  page: number,
  setPage: any,
  setSearchFor: any
) => {
  const data = await getCurrentPage(page);
  const dataSearched = data.results.filter((item: any) => item[attr] === param);
  if (dataSearched) {
    setSearchFor(dataSearched);
    console.log(dataSearched);
  } else {
    setPage(page + 1);
  }
};
