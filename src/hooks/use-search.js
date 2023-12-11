import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchSearch = (q) => {
  const encoded = encodeURIComponent(q);
  return axios
    .get(`http://localhost:3000/api/search?q=${encoded}`)
    .then((response) => response.data);
};

export function useSearch(q) {
  return useQuery({
    queryKey: ["search", q],
    queryFn: () => fetchSearch(q),
    enabled: q?.length > 0,
  });
}
