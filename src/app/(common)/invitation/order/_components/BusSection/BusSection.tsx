import { Input, SelectBox } from "@/components";

import * as styles from "./BusSection.css";
import AddButton from "../AddButton/AddButton";

const BusSection = () => {
  return (
    <>
      <section className={styles.busInputWrapper}>
        <span className={styles.inputTextStyle}>버스 정차 위치</span>
        <Input
          maxWidth="32rem"
          placeholder="버스 정차 위치를 입력해주세요"
          infoMessage="정확한 장소를 기입해주세요"
        />
      </section>

      <section className={styles.busContainer}>
        <AddButton>일시 추가</AddButton>
        <div className={styles.busInputWrapper}>
          <span className={styles.inputTextStyle}>버스 정차 시간</span>
          <div className={styles.timeWrapper}>
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
        </div>
      </section>
    </>
  );
};

export default BusSection;
