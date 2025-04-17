import type { SVGProps } from "react";
import { memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIcBtnDelete = ({
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
    <circle cx={9} cy={9} r={9} fill="#E7EDF8" />
    <g clipPath="url(#clip0_1261_15432)">
      <path
        d="M5.00049 5L13.0362 13.0357"
        stroke="#7B8598"
        strokeLinecap="round"
      />
      <path
        d="M13.3574 5L5.32171 13.0357"
        stroke="#7B8598"
        strokeLinecap="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1261_15432">
        <rect width={10} height={10} fill="white" transform="translate(4 4)" />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(SvgIcBtnDelete);
export default Memo;
