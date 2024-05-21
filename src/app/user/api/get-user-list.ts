import { UseQueryOptions, useQuery } from "react-query";
import axios from "@/libs/axios";
import { ResponseDTO } from "@/interfaces";
import { type users as userType } from "../type";
import { useAppDispatch } from "@/store";
import { setPageCount } from "@/features/app";
interface params {
  per_page?: number;
  total?: number;
  page?: number;
  total_pages?: number;
}

const user = async (params?: params): Promise<ResponseDTO<userType[]>> => {
  return await axios
    .get("api/users", { params })
    .then((response) => response.data)
    .catch((err) => console.log(err));
};

type UseUserOptions = UseQueryOptions<
  ResponseDTO<userType[]>,
  unknown,
  ResponseDTO<userType[]>
>;
export const useUsers = (params?: params) => {
  const dispatch = useAppDispatch();
  return useQuery(["/api/users", params], async () => user(params), {
    onSuccess: (res) => {
      dispatch(setPageCount(res.total_pages));
    },
  });
};
