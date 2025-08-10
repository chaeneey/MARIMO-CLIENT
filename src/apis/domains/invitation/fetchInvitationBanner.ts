import { FETCH_BANNER } from "@/apis/configs/conatants";

import { get } from "../../configs/fetcher";

type BannerItem = {
  fileUrl: string;
  ctaUrl: string;
};

type Banner = {
  bannerList: BannerItem[];
};

type productType = "INVITATION" | "PRE_VIDEO";

export async function fetchInvitationBanner(
  productType: productType
): Promise<BannerItem[]> {
  const res = await get<Banner>(FETCH_BANNER(productType), {
    cache: "no-store",
  });
  return res.bannerList;
}
