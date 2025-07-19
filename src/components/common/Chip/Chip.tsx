import { chipStyle } from "./Chip.css";

export interface ChipProps {
  text: string;
}

const Chip = ({ text }: ChipProps) => {
  return <div className={chipStyle}>{text}</div>;
};

export default Chip;
