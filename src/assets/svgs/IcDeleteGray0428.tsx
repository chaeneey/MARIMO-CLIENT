import type { SVGProps } from "react";
import { memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIcDeleteGray0428 = ({
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
    <path
      d="M2.80176 2.79883L25.3018 25.2988"
      stroke="#7B8598"
      strokeWidth={2.8}
      strokeLinecap="round"
    />
    <path
      d="M26.2021 2.79883L3.70215 25.2988"
      stroke="#7B8598"
      strokeWidth={2.8}
      strokeLinecap="round"
    />
  </svg>
);
const Memo = memo(SvgIcDeleteGray0428);
export default Memo;
