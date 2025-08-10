import { useMutation } from "@tanstack/react-query";

import { POST_PREVIDEO } from "@/apis/configs/conatants";
import { post } from "@/apis/configs/fetcher";
import { PostVideoOrderInfoRequest } from "@types";

interface PostOrderInfoResponse {
  orderCode: string;
}

const PostVideoOrderInfo = async (data: PostVideoOrderInfoRequest) => {
  return post<PostOrderInfoResponse>(POST_PREVIDEO, data);
};

export const usePostVideoOrderInfo = () => {
  return useMutation<PostOrderInfoResponse, Error, PostVideoOrderInfoRequest>({
    mutationFn: PostVideoOrderInfo,
  });
};
