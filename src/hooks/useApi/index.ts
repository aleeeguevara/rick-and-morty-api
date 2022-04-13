import { useEffect, useState } from "react";
import { getCurrentPage } from "../../services";
import { GetApiData, Result, Results } from "../../types";
import { searchByParameter } from "../../utils/searchByParameter";

export const UseApi = () => {
  const [payload, setPayload] = useState<GetApiData>();
  const [page, setPage] = useState<number>(1);
  const [option, setOption] = useState("name");
  const [searchFor, setSearchFor] = useState<any>();
  const [searched, setSearched] = useState("");
  const [pagesInfo, setPagesInfo] = useState();

  useEffect(() => {
    if (searched.length >= 3) {
      searchByParameter(
        option,
        searched,
        page,
        setPage,
        setSearchFor,
        setSearched,
        setPagesInfo
      );
    }
    (async () => {
      const data = await getCurrentPage(page);
      setPayload(data);
    })();
  }, [page, searched, setPayload]);
  return {
    payload,
    setSearched,
    setOption,
    option,
    searchFor,
    page,
    setPage,
    pagesInfo,
    searched,
    setSearchFor,
    setPagesInfo,
  };
};
