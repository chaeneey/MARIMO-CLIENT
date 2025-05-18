import { useState } from "react";

import { checkboxStyle } from "./CheckBox.css";

const CheckBox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div
      className={checkboxStyle({
        state: isChecked ? "checked" : "unchecked",
      })}
      onClick={handleCheck}
    />
  );
};

export default CheckBox;
