import type { SVGProps } from "react";
import { memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIcArrowUnderGray0518 = ({
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
    <g clipPath="url(#clip0_2207_1845)">
      <path
        d="M0.820312 5.72656L8.84016 12.6007L16.86 5.72656"
        stroke="#292F38"
        strokeWidth={1.6367}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_2207_1845">
        <rect
          width={18}
          height={18}
          fill="white"
          transform="translate(0.00390625)"
        />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(SvgIcArrowUnderGray0518);
export default Memo;
