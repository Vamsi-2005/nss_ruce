import { useState } from "react";

const useSearch = (data, key) => {
  const [query, setQuery] = useState("");

  const filtered = data.filter((item) =>
    item[key]?.toLowerCase().includes(query.toLowerCase())
  );

  return { query, setQuery, filtered };
};

export default useSearch;