import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { signup as signupApi } from "../services/apiAuth";

export function useSignUp() {
  const navigate = useNavigate();

  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => navigate("/app"),
  });

  return { signup, isLoading };
}
