import { useMutation } from "react-query";
import { useQueryClient } from "react-query";
import { signup as signupApi } from "../services/apiAuth";

export function useSignUp() {
  const queryClient = useQueryClient();

  const { mutate: signup, isLoading: isLoadingSignUp } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  return { signup, isLoadingSignUp };
}
