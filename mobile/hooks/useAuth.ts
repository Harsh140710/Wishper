import { useApi } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export const useAuthCallBack = () => {
  const api = useApi();

  const result = useMutation({
    mutationFn: async () => {
      const { data } = await api.post("/auth/callback");
      return data;
    },
  });

  return result;
};
