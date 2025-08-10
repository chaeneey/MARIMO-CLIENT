import { fetchVideoItemDetail } from "@/apis/domains/pre-video/detail/fetchVideoItemDetail";
import { VideoInfoTab, VideoSelect } from "@/components/video";

import { videoDetailLayout } from "./page.css";

const page = async ({ params }) => {
  const { id } = await params;
  const preVideoDetail = await fetchVideoItemDetail(id);
  // localStorage.setItem("videoId", id);
  return (
    <div className={videoDetailLayout}>
      <VideoSelect preVideoDetail={preVideoDetail} videoId={id} />
      <VideoInfoTab videoUrl={preVideoDetail.sampleVideoUrl} />
    </div>
  );
};

export default page;
