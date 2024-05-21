import { UseQueryOptions, useMutation, useQuery } from "react-query";
import axios from "@/libs/axios";
import { ResponseDTO } from "@/interfaces";
import { type users as userType } from "../type";
import { useAppDispatch } from "@/store";
import { MutationConfig, queryClient } from "@/libs/react-query";
interface queryParams {
  id: number;
}
const user = async (
  queryParams: queryParams
): Promise<ResponseDTO<userType[]>> => {
  return await axios
    .delete(`api/user/${queryParams.id}`)
    .then((response) => response.data)
    .catch((err) => console.log(err));
};

type usersOptions = {
  config?: MutationConfig<typeof user>;
};
export const useDeleteUsers = ({ config }: usersOptions) => {
  return useMutation(["/api/user", config], user, {
    onSuccess: () => {
      queryClient.invalidateQueries("/api/user");
    },
  });
};
