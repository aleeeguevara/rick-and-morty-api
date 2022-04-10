import { useEffect, useState } from "react";
import { getCurrentPage } from "../../services";
import { GetApiData } from "../../types";

export const UseApi = () => {
  const [payload, setPayload] = useState<GetApiData>();
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    (async () => {
      const data = await getCurrentPage(page);
      setPayload(data);
    })();
  }, []);
  return {
    payload,
    page,
    setPage,
  };
};
