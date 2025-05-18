import { Button, Input, SelectBox } from "@/components";
import CheckBox from "@/components/CheckBox/CheckBox";

import * as styles from "./CommonInfoSection.css";

const CommonInfoSection = () => {
  return (
    <>
      <section className={styles.nameInfoContainer}>
        <span className={styles.inputTitleTextStyle}>신랑측 정보</span>
        <div className={styles.nameInfoWrapper}>
          <div className={styles.nameInfoInputWrapper}>
            <span className={styles.nameInfoSubTextStyle}>아버님</span>
            <div className={styles.nameInfoInputWithCheckbox}>
              <Input placeholder="성함을 작성해주세요" maxWidth="32rem" />
              <div className={styles.nameInfoCheckboxWrapper}>
                <div className={styles.nameInfoCheckboxStyle}>
                  <CheckBox />
                  <span className={styles.nameInfoCheckboxTextStyle}>故</span>
                </div>
                <div className={styles.nameInfoCheckboxStyle}>
                  <CheckBox />
                  <span className={styles.nameInfoCheckboxTextStyle}>
                    세례명
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.nameInfoInputWrapper}>
            <span className={styles.nameInfoSubTextStyle}>어머님</span>
            <div className={styles.nameInfoInputWithCheckbox}>
              <Input placeholder="성함을 작성해주세요" maxWidth="32rem" />
              <div className={styles.nameInfoCheckboxWrapper}>
                <div className={styles.nameInfoCheckboxStyle}>
                  <CheckBox />
                  <span className={styles.nameInfoCheckboxTextStyle}>故</span>
                </div>
                <div className={styles.nameInfoCheckboxStyle}>
                  <CheckBox />
                  <span className={styles.nameInfoCheckboxTextStyle}>
                    세례명
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.nameInfoInputWrapper}>
            <span className={styles.nameInfoSubTextStyle}>신랑님</span>
            <Input placeholder="성함을 작성해주세요" maxWidth="32rem" />
          </div>
        </div>
      </section>

      <section className={styles.nameInfoContainer}>
        <span className={styles.inputTitleTextStyle}>신부측 정보</span>
        <div className={styles.nameInfoWrapper}>
          <div className={styles.nameInfoInputWrapper}>
            <span className={styles.nameInfoSubTextStyle}>아버님</span>
            <div className={styles.nameInfoInputWithCheckbox}>
              <Input placeholder="성함을 작성해주세요" maxWidth="32rem" />
              <div className={styles.nameInfoCheckboxWrapper}>
                <div className={styles.nameInfoCheckboxStyle}>
                  <CheckBox />
                  <span className={styles.nameInfoCheckboxTextStyle}>故</span>
                </div>
                <div className={styles.nameInfoCheckboxStyle}>
                  <CheckBox />
                  <span className={styles.nameInfoCheckboxTextStyle}>
                    세례명
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.nameInfoInputWrapper}>
            <span className={styles.nameInfoSubTextStyle}>어머님</span>
            <div className={styles.nameInfoInputWithCheckbox}>
              <Input placeholder="성함을 작성해주세요" maxWidth="32rem" />
              <div className={styles.nameInfoCheckboxWrapper}>
                <div className={styles.nameInfoCheckboxStyle}>
                  <CheckBox />
                  <span className={styles.nameInfoCheckboxTextStyle}>故</span>
                </div>
                <div className={styles.nameInfoCheckboxStyle}>
                  <CheckBox />
                  <span className={styles.nameInfoCheckboxTextStyle}>
                    세례명
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.nameInfoInputWrapper}>
            <span className={styles.nameInfoSubTextStyle}>신부님</span>
            <Input placeholder="성함을 작성해주세요" maxWidth="32rem" />
          </div>
        </div>
      </section>

      <section className={styles.cautionContainer}>
        <span className={styles.cautionTitleStyle}>주문 시 유의사항</span>
        <div className={styles.cautionTextWrapper}>
          <span className={styles.cautionTextStyle}>
            {`신랑, 신부 이름 중 성은 아버님이 계신 경우 대부분 입력하지 않습니다.`}
          </span>
          <span className={styles.cautionTextStyle}>
            {`단, 아버님이 고인이 되셔서 청첩장에 성함을 기재하지 않는 경우에는 신랑, 신부의 성을 기재합니다.`}
          </span>
        </div>
      </section>

      <section className={styles.dateContainer}>
        <span className={styles.inputTextStyle}>예식일시</span>
        <div className={styles.dateInputWrapper}>
          <Input maxWidth="32rem" placeholder="년도/월/일을 작성해주세요" />
          <SelectBox
            label="시간"
            options={["시간", "1"]}
            selected={"시간"}
            onSelect={() => {}}
            variant="order"
          />
          <SelectBox
            label="분"
            options={["분", "1"]}
            selected={"분"}
            onSelect={() => {}}
            variant="order"
          />
        </div>
      </section>

      <section className={styles.adressWrapper}>
        <h3 className={styles.inputTextStyle}>주소</h3>
        <div className={styles.customerAdressInputWrapper}>
          <div className={styles.customerAdressSearchWrapper}>
            <Input maxWidth="32rem" placeholder="우편번호를 입력해주세요" />
            <Button size="56" color="stroke">
              주소검색
            </Button>
          </div>
          <Input maxWidth="62rem" />
          <Input
            maxWidth="62rem"
            placeholder="상세 주소를 입력해주세요. 예시) 마리빌 205호"
          />
        </div>
      </section>
    </>
  );
};

export default CommonInfoSection;
