import { FETCH_BANNER } from "@/apis/configs/conatants";

import { get } from "../../configs/fetcher";

type Banner = {
  fileUrl: string;
  ctaUrl: string;
};

export async function fetchBanner(
  productType: "INVITATION" | "PREVIDEO",
): Promise<Banner[]> {
  return get<Banner[]>(FETCH_BANNER(productType), { cache: "force-cache" });
}
