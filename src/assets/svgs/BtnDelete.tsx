import type { SVGProps } from "react";
import { memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBtnDelete = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <circle cx={14} cy={14} r={14} fill="#E7EDF8" />
    <path
      d="M8 8L20.5 20.5"
      stroke="#7B8598"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <path
      d="M21 8L8.5 20.5"
      stroke="#7B8598"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </svg>
);
const Memo = memo(SvgBtnDelete);
export default Memo;
