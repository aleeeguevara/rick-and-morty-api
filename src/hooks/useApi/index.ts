import { useEffect, useState } from "react";
import { getCurrentPage } from "../../services";
import { GetApiData } from "../../types";

export const UseApi = () => {
  const [payload, setPayload] = useState<GetApiData>();
  const [page, setPage] = useState<number>(1);
  const [option, setOption] = useState("name");

  useEffect(() => {
    (async () => {
      const data = await getCurrentPage(page);
      setPayload(data);
    })();
  }, [page, setPayload]);
  return {
    payload,
    setOption,
    option,
    page,
    setPage,
  };
};
