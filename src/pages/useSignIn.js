import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { login } from "../services/apiAuth";

export function useSignIn() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: login,
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      navigate("/app", { replace: true });
    },
  });

  return { mutate, isLoading };
}
