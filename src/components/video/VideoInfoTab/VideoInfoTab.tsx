"use client";
import { useRef, useState } from "react";

import {
  CardFileShare,
  CardFileUpload,
  CardProduction,
  CardPurchaseOrder,
  CardRecommendPlayer,
  CardRunningTime,
  CardScreenRatio,
  CardSupply,
} from "@/assets/svgs";
import { Accordion, TabBar } from "@/components/common";

import * as styles from "./VideoInfoTab.css";

const VideoInfoTab = ({ videoUrl }: string) => {
  const [activeTab, setActiveTab] = useState(0);

  const productInfoRef = useRef<HTMLDivElement>(null);
  const detailImageRef = useRef<HTMLDivElement>(null);
  const productionInfoRef = useRef<HTMLDivElement>(null);
  const shippingReturnRef = useRef<HTMLDivElement>(null);

  const sectionRefs = [
    productInfoRef,
    detailImageRef,
    productionInfoRef,
    shippingReturnRef,
  ];

  const handleTabChange = (index: number) => {
    setActiveTab(index);

    const target = sectionRefs[index].current;
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className={styles.containerStyle}>
      <div className={styles.tabBarWrapper}>
        <TabBar
          tabType="productTab"
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />
      </div>
      <section ref={productInfoRef}>
        <h2 className={styles.h2Style}>식전영상</h2>
        <div className={styles.mobileCardWrapper}>
          <CardRunningTime width={192} height={136} />
          <CardScreenRatio width={192} height={136} />
          <CardSupply width={192} height={136} />
          <CardRecommendPlayer width={192} height={136} />
        </div>
      </section>
      <section ref={detailImageRef}>
        <video src={videoUrl} muted autoPlay loop />
      </section>
      <section ref={productInfoRef}>
        <h2 className={styles.h2Style}>제작단계</h2>
        <div className={styles.mobileCardWrapper}>
          <CardFileUpload width={192} height={136} />
          <CardPurchaseOrder width={192} height={136} />
          <CardProduction width={192} height={136} />
          <CardFileShare width={192} height={136} />
        </div>
      </section>
      <section ref={productionInfoRef}>
        <h2 className={styles.h2Style}>주문 전 체크</h2>
        <ul className={styles.checkListUlStyle}>
          <li>
            식전영상 제작일정은 평일기준 2~3일 소요됩니다.(주말,공휴일 제외
            ※수정요청 시 동일제작 기간 소요)
          </li>
          <li>식전영상 제작이 진행된 후 환불 및 상품변경은 불가능합니다.</li>
          <li>
            별도의 사진보정 작업이 없으므로 사진보정이 완료된 최종사진으로
            업로드 해주세요.
          </li>
          <li>제작 완료 후 이메일을 통해 영상을 보내드립니다.</li>
        </ul>
      </section>
      <section ref={shippingReturnRef}>
        <h2 className={styles.h2Style}>배송 및 환불정보</h2>
        <div className={styles.shippingReturnWrapper}>
          <Accordion title="배송정보"></Accordion>
          <Accordion title="환불정보"></Accordion>
        </div>
      </section>
    </div>
  );
};

export default VideoInfoTab;
