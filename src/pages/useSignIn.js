import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { login } from "../services/apiAuth";

export function useSignIn() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: ({ email, password }) => login({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      navigate("/app", { replace: true });
    },
    onError: (error) => console.log(error),
  });

  return { mutate, isLoading };
}
