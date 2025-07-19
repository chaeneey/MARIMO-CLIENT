// "use client";

// import clsx from "clsx";
// import { useState } from "react";

// import { IcArrowUnderGray0534 } from "@/assets/svgs";

// import {
//   accordionBoxStyle,
//   accordionChildrenWrapper,
//   accordionContentWrapper,
//   accordionWrapper,
//   arrowIconStyle,
//   arrowRotateStyle,
//   checkboxStyle,
//   dividerStyle,
//   leftSectionWrapper,
//   titleStyle,
// } from "./Accordion.css";

// export interface AccordionProps {
//   title: string;
//   hasCheckbox?: boolean;
//   children?: React.ReactNode;
// }

// const Accordion = ({ title, hasCheckbox, children }: AccordionProps) => {
//   const [isOpen, setIsOpen] = useState(!hasCheckbox);
//   const [isChecked, setIsChecked] = useState(false);

//   const handleToggle = () => {
//     if (!isChecked && hasCheckbox) return;
//     setIsOpen((prev) => !prev);
//   };

//   const handleCheck = () => {
//     setIsChecked((prev) => {
//       const next = !prev;
//       if (!next) setIsOpen(false);
//       return next;
//     });
//   };

//   return (
//     <div className={accordionWrapper}>
//       <div className={accordionBoxStyle} onClick={handleToggle}>
//         <div className={leftSectionWrapper}>
//           {hasCheckbox && (
//             <div
//               className={checkboxStyle({
//                 state: isChecked ? "checked" : "unchecked",
//               })}
//               onClick={handleCheck}
//             />
//           )}
//           <span
//             className={titleStyle({
//               colorType: !hasCheckbox ? "black" : isChecked ? "black" : "gray",
//             })}
//           >
//             {title}
//           </span>
//         </div>
//         {(hasCheckbox && !isChecked) || (isChecked && !children) ? (
//           <></>
//         ) : (
//           <IcArrowUnderGray0534
//             className={clsx(arrowIconStyle, {
//               [arrowRotateStyle]: isOpen,
//             })}
//           />
//         )}
//       </div>
//       {isOpen && (
//         <div className={accordionContentWrapper}>
//           <div className={dividerStyle} />
//           <div className={accordionChildrenWrapper}>{children}</div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Accordion;

"use client";

import clsx from "clsx";
import { useState } from "react";

import { IcArrowUnderGray0534 } from "@/assets/svgs";

import {
  accordionBoxStyle,
  accordionChildrenWrapper,
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
  checkboxState?: boolean;
  handleCheckboxStateChange?: (checked: boolean) => void;
}

const Accordion = ({
  title,
  hasCheckbox,
  children,
  checkboxState,
  handleCheckboxStateChange,
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(() => !hasCheckbox || checkboxState);

  // useEffect(() => {
  //   if (children && checkboxState) setIsOpen((prev) => !prev);
  // }, [checkboxState, children]);

  const handleToggle = () => {
    if (hasCheckbox && !checkboxState) return;
    setIsOpen((prev) => !prev);
  };

  const handleCheck = () => {
    if (handleCheckboxStateChange) {
      handleCheckboxStateChange(!checkboxState);
    }
  };

  return (
    <div className={accordionWrapper}>
      <div className={accordionBoxStyle} onClick={handleToggle}>
        <div className={leftSectionWrapper}>
          {hasCheckbox && (
            <div
              className={checkboxStyle({
                state: checkboxState ? "checked" : "unchecked",
              })}
              onClick={handleCheck}
            />
          )}
          <span
            className={titleStyle({
              colorType: !hasCheckbox || checkboxState ? "black" : "gray",
            })}
          >
            {title}
          </span>
        </div>
        {(hasCheckbox && !checkboxState) ||
        (checkboxState && !children) ? null : (
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
          <div className={accordionChildrenWrapper}>{children}</div>
        </div>
      )}
    </div>
  );
};

export default Accordion;
