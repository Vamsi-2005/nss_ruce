import { useState } from "react";

const useFilter = (data, key) => {
  const [filter, setFilter] = useState("");

  const filtered = filter
    ? data.filter((item) => item[key] === filter)
    : data;

  return { filter, setFilter, filtered };
};

export default useFilter;