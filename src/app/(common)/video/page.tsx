import { ProductsSection, VideoPlayer } from "@/components/video";

import { videoPageLayout } from "./page.css";

const page = () => {
  return (
    <div className={videoPageLayout}>
      <VideoPlayer />
      <ProductsSection />
    </div>
  );
};

export default page;
