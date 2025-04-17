"use client";

import clsx from "clsx";
import { useState } from "react";

import { IcArrowUnderGray0534 } from "@/assets/svgs";

import {
  accordionBoxStyle,
  accordionContentWrapper,
  accordionWrapper,
  arrowIconStyle,
  arrowRotateStyle,
  checkboxStyle,
  dividerStyle,
  leftSectionWrapper,
  titleStyle,
} from "./Accordion.css";

export interface AccordionProps {
  title: string;
  hasCheckbox?: boolean;
  children?: React.ReactNode;
}

const Accordion = ({ title, hasCheckbox, children }: AccordionProps) => {
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
          <IcArrowUnderGray0534
            className={clsx(arrowIconStyle, {
              [arrowRotateStyle]: isOpen,
            })}
          />
        )}
      </div>
      {isOpen && (
        <div className={accordionContentWrapper}>
          <div className={dividerStyle} />
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
