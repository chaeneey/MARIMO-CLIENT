import { VideoInfoTab, VideoSelect } from "@/components/video";

import { videoDetailLayout } from "./page.css";

const page = () => {
  return (
    <div className={videoDetailLayout}>
      <VideoSelect />
      <VideoInfoTab />
    </div>
  );
};

export default page;
