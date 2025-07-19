import Link from "next/link";

import { fetchVideoItemList } from "@/apis/domains/pre-video/fetchVideoItemList";

import {
  productCardContainer,
  productCardLayout,
  productSectionLayout,
  productSectionTitleStyle,
  videoInfoWrapper,
  videoPriceStyle,
  videoSaleStyle,
  videoStyle,
  videoTitleStyle,
} from "./ProductSection.css";
import VideoThumbnail from "../VideoThumbnail/VideoThumbnail";

const ProductsSection = async () => {
  const preVideoItemList = await fetchVideoItemList();
  return (
    <section className={productSectionLayout}>
      <h1 className={productSectionTitleStyle}>PRE-CEREMONY VIDEO</h1>
      <section className={productCardLayout}>
        {preVideoItemList.map((item) => (
          <Link href={`video/detail/${item.id}`} key={item.id}>
            <section className={productCardContainer}>
              <div className={videoStyle}>
                <VideoThumbnail
                  imageUrl={item.imageUrl}
                  videoUrl={item.sampleVideoUrl}
                />
              </div>
              <span className={videoTitleStyle}>{item.name}</span>
              <div className={videoInfoWrapper}>
                <span className={videoSaleStyle}>{item.discountRate}%</span>
                <span className={videoPriceStyle}>
                  {item.price.toLocaleString()}원
                </span>
              </div>
            </section>
          </Link>
        ))}
      </section>
    </section>
  );
};

export default ProductsSection;
