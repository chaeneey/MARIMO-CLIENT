import Image from "next/image";

import { homeBottom1, homeBottom2, homeBottom3 } from "@/assets/images";

import * as styles from "./MarimoConceptSection.css";

const MarimoConceptSection = () => {
  return (
    <div className={styles.conceptSectionLayout}>
      <section className={styles.conceptSectionTopContainer}>
        <span className={styles.conceptSectionMainTextStyle}>
          with Marimo by your side
        </span>
        <section>
          <div className={styles.conceptSectionImageWrapper}>
            <Image src={homeBottom1} alt="마리모 컨셉사진1" />
            <Image src={homeBottom2} alt="마리모 컨셉사진2" />
            <Image src={homeBottom3} alt="마리모 컨셉사진3" />
          </div>
          <div className={styles.conceptSectionImageWrapper}>
            <Image src={homeBottom1} alt="마리모 컨셉사진1" />
            <Image src={homeBottom2} alt="마리모 컨셉사진2" />
            <Image src={homeBottom3} alt="마리모 컨셉사진3" />
          </div>
        </section>
      </section>

      <section className={styles.conceptSectionBottomContainer}>
        <span>마리모는 예비부부의 취향과 감성을 세심하게 반영해,</span>
        <span>오직 당신만을 위한 단 하나의 웨딩 콘텐츠를 제작합니다</span>
      </section>
    </div>
  );
};

export default MarimoConceptSection;
