import { UseQueryOptions, useQuery } from "react-query";
import axios from "@/libs/axios";
import { ResponseDTO } from "@/interfaces";
import { type user as userType } from "../type";
import { useAppDispatch } from "@/store";

interface queryParams {
  id?: number;
}

const user = async (
  queryParams: queryParams
): Promise<ResponseDTO<userType>> => {
  return await axios
    .get(`api/user/${queryParams.id}`)
    .then((response) => response.data)
    .catch((err) => console.log(err));
};

type UseUserOptions = UseQueryOptions<
  ResponseDTO<userType>,
  unknown,
  ResponseDTO<userType>
>;
export const useUser = (queryParams: queryParams) => {
  const dispatch = useAppDispatch();
  return useQuery(["/api/user", queryParams.id], async () => user(queryParams));
};
