import { Accordion } from "@/components";
import Button from "@/components/Button/Button";

import {
  accordionContainer,
  orderBarStyle,
  orderPageLayout,
  titleTextStyle,
  titleWrapper,
} from "./page.css";

const Page = () => {
  return (
    <form className={orderPageLayout}>
      <div className={titleWrapper}>
        <h1 className={titleTextStyle}>청첩장 주문하기</h1>
        <Button size="50" color="lime01">
          주문하기
        </Button>
      </div>

      <div className={orderBarStyle} />

      <div className={accordionContainer}>
        <Accordion title="주문자 정보"></Accordion>
        <Accordion title="청첩장 공통정보 입력"></Accordion>
        <Accordion title="종이 청첩장 기본 정보"></Accordion>
        <Accordion title="전세버스" hasCheckbox></Accordion>
        <Accordion title="피로연" hasCheckbox></Accordion>
        <Accordion title="모바일 청첩장 기본 정보"></Accordion>
        <Accordion title="갤러리" hasCheckbox></Accordion>
        <Accordion title="전화걸기" hasCheckbox></Accordion>
        <Accordion title="축의금 계좌" hasCheckbox></Accordion>
        <Accordion title="달력" hasCheckbox></Accordion>
        <Accordion title="지도 및 길 찾기" hasCheckbox></Accordion>
        <Accordion title="방명록" hasCheckbox></Accordion>
        <Accordion title="카카오톡 공유" hasCheckbox></Accordion>
        <Accordion title="참석의사 전달" hasCheckbox></Accordion>
        <Accordion title="기타 요청사항" hasCheckbox></Accordion>
        <Accordion title="개인정보 동의" hasCheckbox></Accordion>
      </div>
    </form>
  );
};

export default Page;
