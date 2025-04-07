"use client";

import { useState } from "react";
import {
  accordionBoxStyle,
  accordionWrapper,
  arrowIconStyle,
  checkboxStyle,
  leftSectionWrapper,
  titleStyle,
} from "./Accordion.css";
import { IcArrowUnderGray05 } from "@/assets/svgs";

export interface AccordionProps {
  title: string;
  hasCheckbox?: boolean;
}

const Accordion = ({ title, hasCheckbox }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);

  const handleCheck = () => {
    setIsChecked((prev) => !prev);
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={accordionWrapper}>
      <div className={accordionBoxStyle} onClick={handleToggle}>
        <div className={leftSectionWrapper}>
          {hasCheckbox && (
            <div
              className={checkboxStyle({
                state: isChecked ? "checked" : "unchecked",
              })}
              onClick={handleCheck}
            />
          )}
          <span
            className={titleStyle({
              colorType: !hasCheckbox ? "black" : isChecked ? "black" : "gray",
            })}
          >
            {title}
          </span>
        </div>
        {hasCheckbox && !isChecked ? (
          <></>
        ) : (
          <IcArrowUnderGray05 className={arrowIconStyle} />
        )}
      </div>
      {isOpen && <div>1</div>}
    </div>
  );
};

export default Accordion;
