import { useMutation } from "@tanstack/react-query";

import { POST_INVITATION } from "@/apis/configs/conatants";
import { post } from "@/apis/configs/fetcher";
import { PostOrderInfoRequest } from "@types";

interface PostOrderInfoResponse {
  orderCode: string;
}

const PostOrderInfo = async (data: PostOrderInfoRequest) => {
  return post<PostOrderInfoResponse>(POST_INVITATION, data);
};

export const usePostOrderInfo = () => {
  return useMutation<PostOrderInfoResponse, Error, PostOrderInfoRequest>({
    mutationFn: PostOrderInfo,
  });
};
