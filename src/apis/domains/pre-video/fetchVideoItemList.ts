import { FETCH_PREVIDEO_LIST } from "@/apis/configs/conatants";
import { get } from "@/apis/configs/fetcher";
import { PreVideoItemList } from "@types";

export async function fetchVideoItemList() {
  const res = await get<PreVideoItemList>(FETCH_PREVIDEO_LIST, {
    cache: "force-cache",
  });

  return res.preVideoList;
}
