import ProductsSection from "@/components/video/ProductsSection/ProductsSection";
import VideoPlayer from "@/components/video/VideoPlayer/VideoPlayer";

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
