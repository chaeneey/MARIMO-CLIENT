import Image from "next/image";

import {
  homeThumbnail,
  homeTop1,
  homeTop2,
  homeTop3,
  homeTop4,
  marimoLabel,
} from "@/assets/images";
import { IcLogoLarge } from "@/assets/svgs";

import * as styles from "./MarimoInfoSection.css";

const MarimoInfoSection = () => {
  return (
    <div>
      <section className={styles.marimoInfoTopContainer}>
        <section>
          <Image
            className={styles.homeThumbnailImageStyle}
            src={homeThumbnail}
            alt="마리모 메인 이미지"
          />
        </section>

        <section>
          <Image
            src={homeTop1}
            alt="마리모 상단 이미지 1"
            className={styles.homeSubImageStyle}
          />
          <Image
            src={homeTop2}
            alt="마리모 상단 이미지 1"
            className={styles.homeSubImageStyle}
          />
          <Image
            src={homeTop3}
            alt="마리모 상단 이미지 1"
            className={styles.homeSubImageStyle}
          />
          <Image
            src={homeTop4}
            alt="마리모 상단 이미지 1"
            className={styles.homeSubImageStyle}
          />
        </section>

        <section className={styles.homeMainTextWrapper}>
          <IcLogoLarge width={403} height={138} />
          <h1 className={styles.homeMainTextStyle}>{"오래도록 변치 않는,"}</h1>
          <h1 className={styles.homeMainTextStyle}>{"사랑을 담다"}</h1>
        </section>
      </section>

      <section>
        <div className={styles.marimoInfoBottomContainer}>
          <h2 className={styles.homeSubMediumTextStyle}>Marimo는</h2>
          <h2 className={styles.homeSubBoldTextStyle}>
            두 사람의 특별한 순간을 더 아름답게 만들어주는
          </h2>
          <h2 className={styles.homeSubMediumTextStyle}>
            웨딩 콘텐츠 브랜드입니다
          </h2>
        </div>

        <Image src={marimoLabel} alt="marimo label" style={{ width: "100%" }} />
      </section>
    </div>
  );
};

export default MarimoInfoSection;
