import { IcArrowDownGray0418 } from "@/assets/svgs";

import * as styles from "./MiniAccordion.css";

interface MiniAccordionProps {
  index: string;
  text: string;
  isOpen: boolean;
  onClick: () => void;
}

const MiniAccordion = ({
  index,
  text,
  isOpen,
  onClick,
}: MiniAccordionProps) => {
  return (
    <div className={styles.accordionBox}>
      <div className={styles.accordionContainer} onClick={onClick}>
        <div className={styles.accordionLeftSection}>
          <div className={styles.iconStyle}>{index}</div>
          <span className={styles.sampleTextStyle}>샘플 0{index}</span>
        </div>
        <IcArrowDownGray0418
          width={18}
          height={18}
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
          }}
        />
      </div>
      {isOpen && (
        <div className={styles.accordionOpenContainer}>
          <div className={styles.dividerStyle} />
          <div className={styles.accordionContentWrapper}>{text}</div>
        </div>
      )}
    </div>
  );
};

export default MiniAccordion;
