import { Input } from "@/components";

import {
  accountSectionContainer,
  accountSubTextStyle,
  inputColumnWrapper,
  inputInfoTextStyle,
  inputRowWrapper,
  inputTitleTextStyle,
  inputTitleWrapper,
  inputWrapper,
} from "./AccountSection.css";
import AddButton from "../AddButton/AddButton";

const AccountSection = () => {
  return (
    <>
      <section className={accountSectionContainer}>
        <section className={inputTitleWrapper}>
          <span className={inputTitleTextStyle}>신랑측 정보</span>
          <span className={inputInfoTextStyle}>
            계좌는 최대 3개까지 입력 가능합니다.
          </span>
        </section>
        <section className={inputColumnWrapper}>
          <AddButton>계좌추가</AddButton>
          <div className={inputRowWrapper}>
            <span className={accountSubTextStyle}>계좌정보</span>

            <div className={inputWrapper}>
              <Input placeholder="은행" maxWidth="20rem" />
              <Input placeholder="예금주" maxWidth="20rem" />
              <Input placeholder="계좌번호" maxWidth="28rem" />
            </div>
          </div>
        </section>
      </section>

      <section className={accountSectionContainer}>
        <section className={inputTitleWrapper}>
          <span className={inputTitleTextStyle}>신부측 정보</span>
          <span className={inputInfoTextStyle}>
            계좌는 최대 3개까지 입력 가능합니다.
          </span>
        </section>
        <section className={inputColumnWrapper}>
          <AddButton>계좌추가</AddButton>
          <div className={inputRowWrapper}>
            <span className={accountSubTextStyle}>계좌정보</span>

            <div className={inputWrapper}>
              <Input placeholder="은행" maxWidth="20rem" />
              <Input placeholder="예금주" maxWidth="20rem" />
              <Input placeholder="계좌번호" maxWidth="28rem" />
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default AccountSection;
