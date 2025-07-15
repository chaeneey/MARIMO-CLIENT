import { FETCH_INVITATION_DETAIL } from "@/apis/configs/conatants";
import { get } from "@/apis/configs/fetcher";
import { InvitationItemDetail } from "@types";

export async function fetchInvitationItemDetail(
  invitationId: number
): Promise<InvitationItemDetail> {
  const res = await get<InvitationItemDetail>(
    FETCH_INVITATION_DETAIL(invitationId),
    {
      cache: "force-cache",
    }
  );
  return res;
}
