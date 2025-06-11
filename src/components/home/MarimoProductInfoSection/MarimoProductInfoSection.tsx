import {
  homeInvitation1,
  homeInvitation2,
  homeInvitation3,
  homeVideo1,
  homeVideo2,
  homeVideo3,
} from "@/assets/images";

import ProductCarousel from "../ProductCarousel/ProductCarousel";

const MarimoProductInfoSection = () => {
  return (
    <div>
      <ProductCarousel
        mainText="WEDDING INVITATION"
        subText="마리모만의 감각적인 청첩장 디자인부터"
        direction="right"
        carouselImages={[homeInvitation1, homeInvitation2, homeInvitation3]}
      />

      <ProductCarousel
        mainText="PRE-CEREMONY VIDEO"
        subText="두 사람의 이야기를 특별한 감성으로 담아낸 식전영상까지"
        direction="left"
        carouselImages={[homeVideo1, homeVideo2, homeVideo3]}
      />
    </div>
  );
};

export default MarimoProductInfoSection;
