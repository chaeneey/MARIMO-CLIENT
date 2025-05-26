import { ReactElement } from "react";

import {
  receiptBarStyle,
  receiptLayout,
  receiptTitleStyle,
  receiptTopSection,
} from "./Receipt.css";

interface receiptProps {
  children: ReactElement;
  title: string;
}

const Receipt = ({ children, title }: receiptProps) => {
  return (
    <div className={receiptLayout}>
      <section className={receiptTopSection}>
        <h1 className={receiptTitleStyle}>{title}</h1>
        <div className={receiptBarStyle} />
      </section>

      {children}
    </div>
  );
};

export default Receipt;
