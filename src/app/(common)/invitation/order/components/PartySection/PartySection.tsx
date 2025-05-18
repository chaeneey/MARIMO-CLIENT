import { Input, SelectBox } from "@/components";

import * as styles from "./PartySection.css";

const PartySection = () => {
  return (
    <>
      <section className={styles.partyInputWrapper}>
        <span className={styles.inputTextStyle}>피로연 장소</span>
        <Input
          width="32rem"
          placeholder="피로연 장소를 입력해주세요"
          infoMessage="정확한 장소를 기입해주세요"
        />
      </section>

      <section className={styles.partyInputWrapper}>
        <span className={styles.inputTextStyle}>피로연 일시</span>
        <div className={styles.timeWrapper}>
          <Input width="32rem" placeholder="년도/월/일을 작성해주세요" />

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
    </>
  );
};

export default PartySection;
