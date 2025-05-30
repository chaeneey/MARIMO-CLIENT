import { FETCH_ORDER_INFO } from "@/constants/apis/api";
import { useQuery } from "@tanstack/react-query";
import { get } from "./fetcher";

type OrderType = "invitations" | "pre-videos"
type OrderInfo = {
    customerName: string;
    orderCode: string;
}

type OrderInfoDetail = {
    name: string;
    age: number
    // 추후 추가 예정
}

const fetchOrderInfo = async (
  orderType: OrderType, orderInfo: OrderInfo
): Promise<OrderInfoDetail[]> => {
  return get<OrderInfoDetail[]>(FETCH_ORDER_INFO(orderType, orderInfo.customerName, orderInfo.orderCode));
};

export const useFetchOrderInfo = (orderType: OrderType, orderInfo: OrderInfo) => {
    return useQuery({
    queryKey: [1], // 추후 수정
    queryFn: () => fetchOrderInfo(orderType, orderInfo);
    })

}