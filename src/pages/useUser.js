import { useQuery } from "react-query";
import { getCurrentUser } from "../services/apiAuth";

export function useUser() {
  const { data: user, isLoading: isLoadingUser } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return { user, isLoadingUser, isAuth: user?.role === "authenticated" };
}
