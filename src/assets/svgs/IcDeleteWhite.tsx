import type { SVGProps } from "react";
import { memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIcDeleteWhite = ({
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
      d="M2.80127 2.79883L25.3013 25.2988"
      stroke="white"
      strokeWidth={2.8}
      strokeLinecap="round"
    />
    <path
      d="M26.2014 2.79883L3.70142 25.2988"
      stroke="white"
      strokeWidth={2.8}
      strokeLinecap="round"
    />
  </svg>
);
const Memo = memo(SvgIcDeleteWhite);
export default Memo;
