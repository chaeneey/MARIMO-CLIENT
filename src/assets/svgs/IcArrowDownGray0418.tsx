import type { SVGProps } from "react";
import { memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIcArrowDownGray0418 = ({
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
    <g clipPath="url(#clip0_3280_481)">
      <path
        d="M0.816406 5.72656L8.83626 12.6007L16.8561 5.72656"
        stroke="#7B8598"
        strokeWidth={1.6367}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_3280_481">
        <rect width={18} height={18} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(SvgIcArrowDownGray0418);
export default Memo;
