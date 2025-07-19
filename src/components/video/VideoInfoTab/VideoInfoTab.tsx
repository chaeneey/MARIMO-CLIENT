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
          <Accordion title="배송정보">
            <ul className={styles.checkListUlStyle}>
              <li>
                배송은 택배로 발송되며, 전 제품 무료배송 서비스를 제공하고
                있습니다.
              </li>
              <li>도서 / 산간 지역은 2-3일 정도 배송일이 추가 소요됩니다.</li>
              <li>
                퀵서비스 배송은 서울, 경기, 인천 일부 지역만 가능합니다. (지역에
                따라 비용 차이 발생)
              </li>
              <li>
                MARIMO에서 택배 출고 후 택배사의 물량이나 배송시스템에 따라
                배송일이 지연될 수 있습니다.
              </li>
            </ul>
          </Accordion>
          <Accordion title="환불정보">
            <ul className={styles.checkListUlStyle}>
              <li>초안 확정과 결제가 완료된 주문 건은 취소가 불가능합니다.</li>
              <li>수령 후 단순 변심으로 인한 반품은 불가능합니다.</li>
              <li>
                인쇄 진행 및 인쇄 완료된 상품에서 확인되는 오탈자(띄어쓰기
                포함), 정보 오류(본사제공 인사말, 약도 포함) 등은 직접 초안
                확정을 하신 고객님의 책임 사유에 해당되어 재인쇄 및 반품, 환불이
                불가능합니다. (약도의 경우 교통편 및 주소 등 확인 필수)
              </li>
              <li>
                상품에 대한 사고 접수 (인쇄불량, 정품불량, 배송사고, 수량부족
                등) 는 상품을 수령하신 후 봉투 삽입 작업 전 3일 이내
                접수해주셔야 하며 (1회에 한함), 수령 후 3일 이후 사고 접수 건은
                처리되지 않습니다.
              </li>
              <li>
                상품에 이상이 있을 경우 교환(재인쇄)을 원칙으로 하고 있으며 전체
                환불 처리는 어렵습니다. (단, 3일 이내 클레임 접수 시 교환 가능
                합니다)
              </li>
              <li>
                인쇄 작업 시 정전기로 인해 인쇄가 안된 빈 카드가 섞이는 경우가
                발생할 수 있습니다. 봉투 삽입 전 꼭 확인해주시기 바랍니다.
                인쇄가 안된 빈 카드는 주문하신 수량과는 무관하며, 빈 카드, 혹은
                불량 카드를 봉투에 삽입하고 발송 후 발생되는 사고는 처리되지
                않습니다.
              </li>
              <li>
                포토청첩장을 포함한 디지털 인쇄 청첩장의 경우 모니터 색상(RGB)과
                인쇄물(CMYK) 색상에 약간의 차이가 있을 수 있으며 사고에 해당되지
                않습니다.
              </li>
              <li>
                인쇄 제작 특성상 생산 주기별로 미세한 색상에 차이가 있을 수
                있습니다. (샘플과 실제품의 색상 차이 포함)
              </li>
              <li>
                리본의 경우 생산 주기에 따라 미세한 색상 차이가 있을 수
                있습니다.
              </li>
              <li>
                카드에 불규칙하게 보이는 점이나 이물질은 원재료 용지에서 발생한
                부분으로 사고에 해당되지 않습니다.
              </li>
              <li>
                용지 생산 주기에 따라 두께와 탄성도, 색상 등의 미세한 차이가
                있을 수 있으며 사고에 해당되지 않습니다.
              </li>
              <li>
                인쇄 시점 및 제작 공정 특성상 샘플과 실제품의 색상 및 가공에
                차이가 있을 수 있으며 사고에 해당되지 않습니다.
              </li>
            </ul>
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default VideoInfoTab;
