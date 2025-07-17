import { FETCH_PREVIDEO_DETAIL } from "@/apis/configs/conatants";
import { get } from "@/apis/configs/fetcher";
import { PreVideoDetail } from "@types";

export async function fetchVideoItemDetail(
  preVideoId: number
): Promise<PreVideoDetail> {
  const res = await get<PreVideoDetail>(FETCH_PREVIDEO_DETAIL(preVideoId), {
    cache: "force-cache",
  });
  return res;
}
