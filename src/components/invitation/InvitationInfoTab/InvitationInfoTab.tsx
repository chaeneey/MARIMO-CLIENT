"use client";
import { useRef, useState } from "react";

import {
  CardCalender,
  CardCall,
  CardGallery,
  CardGuestbook,
  CardMap,
  CardMessage,
  CardPayment,
  CardShare,
} from "@/assets/svgs";
import { CustomImage } from "@/components/common";
import { Accordion, TabBar } from "@/components/common";

import * as styles from "./InvitationInfoTab.css";

const InvitationInfoTab = ({ detailImageList }: string[]) => {
  const [activeTab, setActiveTab] = useState(0);

  const productInfoRef = useRef<HTMLDivElement>(null);
  const detailImageRef = useRef<HTMLDivElement>(null);
  const checkBeforeOrderRef = useRef<HTMLDivElement>(null);
  const shippingReturnRef = useRef<HTMLDivElement>(null);

  const sectionRefs = [
    productInfoRef,
    detailImageRef,
    checkBeforeOrderRef,
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
        <div>
          <h2 className={styles.h2Style}>종이청첩장</h2>
          <div>종이 청첩장 카드 4개 들어갈거임</div>
        </div>
        <div>
          <h2 className={styles.h2Style}>모바일 청첩장</h2>
          <div className={styles.mobileCardWrapper}>
            <CardGallery width={192} height={136} />
            <CardCall width={192} height={136} />
            <CardCalender width={192} height={136} />
            <CardMap width={192} height={136} />
            <CardPayment width={192} height={136} />
            <CardGuestbook width={192} height={136} />
            <CardShare width={192} height={136} />
            <CardMessage width={192} height={136} />
          </div>
        </div>
      </section>
      <section ref={detailImageRef} className={styles.imageSectionStyle}>
        {detailImageList.map((image, i) => (
          <CustomImage key={i} src={image} alt="청첩장 이미지" />
        ))}
      </section>
      <section ref={checkBeforeOrderRef}>
        <h2 className={styles.h2Style}>주문 전 체크</h2>
        <ul className={styles.checkListUlStyle}>
          <li>
            주문 접수 후 제작 가능한 이미지의 화질인 지 확인 한 뒤에 결제를 위한
            카카오 알림톡이 발송됩니다. (영업일 기준 1~2일 소요)
          </li>
          <li>
            추후 초안 발송과 수정은 신랑 신부님의 편의와 빠른 응대를 위해 카카오
            채널을 통한 디자이너와의 1:1 상담으로 진행 됩니다.
          </li>
          <li>
            디자인 확정과 결제가 완료된 주문 건은 영업일 기준, 2~3일 이후
            택배발송됩니다.
          </li>
          <li>
            카드와 봉투는 1 - 3매 정도 더 드리고 있으나 인쇄공정에 따라 여분이
            포함되지 않을 수 있습니다.
          </li>
          <li>
            인쇄 제작 공정상 생산 주기별로 미세하게 색상 차이가 있을 수
            있습니다.
          </li>
          <li>
            위 카드 이미지는 촬영 세팅 및 모니터 설정에 따라 실제카드와 색상 및
            재질이 다르게 보일 수 있습니다.
          </li>
          <li>
            카드의 예식정보, 행사정보 인쇄 컬러는 샘플과 동일하게 진행됩니다.
          </li>
          <li>
            추가주문시 최초 수량과 상관없이 수량별 할인가격이 적용되니 최초
            주문시 조금 여유롭게 하시는 것이 좋습니다.
          </li>
          <li>
            모바일 청첩장은 주문 시 등록하신 예식일로부터 30일간 보관하실 수
            있습니다.
          </li>
          <li>
            수신자는 스마트폰인 경우에만 모바일 청첩장을 확인할 수 있습니다.
          </li>
          <li>
            모바일 청첩장은 스마트폰 기종에 따라 이미지 사이즈 차이가 발생할 수
            있습니다.
          </li>
          <li>
            자세한 사항은 카카오톡채널을 통해 남겨주시면 친절하고 빠르게
            답변해드리겠습니다.
          </li>
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

export default InvitationInfoTab;
