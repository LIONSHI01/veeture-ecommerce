import { useState } from "react";
import { useQuery } from "react-query";
import { getUserProfile } from "../authRequest";

export const useGetUserHook = () => {
  const [user, setUser] = useState(null);
  const { isLoading, refetch } = useQuery(["user"], () => getUserProfile(), {
    onSuccess: (data) => setUser(data),
    onError: (err) =>
      console.log("encounter an error during fetching ==> ", err),
  });

  return { user, isLoading, refetch };
};
