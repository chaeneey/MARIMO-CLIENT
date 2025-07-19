import { fetchInvitationBanner } from "@/apis/domains/invitation/fetchInvitationBanner";
import { InvitationMain, MainBanner } from "@/components/invitation";

const page = async () => {
  const bannerList = await fetchInvitationBanner("INVITATION");
  const realImages = bannerList.map((banner) => banner.fileUrl);
  return (
    <>
      <MainBanner realImages={realImages} />
      <InvitationMain />
    </>
  );
};

export default page;
