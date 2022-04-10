export type GetApiData = {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string | null;
  };
  results: ResultsApi[];
};

export type ResultsApi = {
  [key: string]: string;
};
