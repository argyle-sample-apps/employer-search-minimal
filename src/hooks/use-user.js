import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchUser = () => {
  return axios
    .post(`http://localhost:3000/api/user`)
    .then((response) => response.data);
};

export function useUser() {
  return useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
  });
}
