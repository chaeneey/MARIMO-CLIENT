import { FETCH_URLSLUG } from "@/apis/configs/conatants";

import { get } from "../../configs/fetcher";

export async function fetchUrlSlug(urlSlug: string): Promise<string> {
  const res = await get(FETCH_URLSLUG(urlSlug), {
    cache: "no-store",
  });
  console.log(res);
  return res;
}
