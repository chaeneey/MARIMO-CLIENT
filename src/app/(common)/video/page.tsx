import { fetchInvitationBanner } from "@/apis/domains/invitation/fetchInvitationBanner";
import { ProductsSection, VideoPlayer } from "@/components/video";

import { videoPageLayout } from "./page.css";

const page = async () => {
  const bannerList = await fetchInvitationBanner("PRE_VIDEO");
  const realVideo = bannerList.map((banner) => banner.fileUrl);
  return (
    <div className={videoPageLayout}>
      <VideoPlayer realVideo={realVideo} />
      <ProductsSection />
    </div>
  );
};

export default page;
