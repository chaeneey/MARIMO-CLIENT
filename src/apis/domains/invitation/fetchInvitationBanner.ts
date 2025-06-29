import { FETCH_BANNER } from "@/apis/configs/conatants";

import { get } from "../../configs/fetcher";

type BannerItem = {
  fileUrl: string;
  ctaUrl: string;
};

type Banner = {
  bannerList: BannerItem[];
};

type productType = "INVITATION" | "PREVIDEO";

export async function fetchInvitationBanner(
  productType: productType,
): Promise<BannerItem[]> {
  const res = await get<Banner>(FETCH_BANNER(productType), {
    cache: "force-cache",
  });
  return res.bannerList;
}
