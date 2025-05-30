import { FETCH_BANNER } from "@/constants/apis/api";

import { get } from "./fetcher";

type Banner = {
  fileUrl: string;
  ctaUrl: string;
};

export async function fetchBanner(
  productType: "INVITATION" | "PREVIDEO"
): Promise<Banner[]> {
  return get<Banner[]>(FETCH_BANNER(productType));
}
