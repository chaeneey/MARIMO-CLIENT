import { FETCH_INVITATION_LIST } from "@/apis/configs/conatants";
import { get } from "@/apis/configs/fetcher";
import { InvitationItemList } from "@types";

export async function fetchInvitationItemList() {
  const res = await get<InvitationItemList>(FETCH_INVITATION_LIST, {
    cache: "force-cache",
  });
  return res.invitationList;
}
