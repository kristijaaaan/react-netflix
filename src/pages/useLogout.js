import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { logout as logoutApi } from "../services/apiAuth";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/", { replace: true });
    },
  });

  return { logout, isLoading };
}
