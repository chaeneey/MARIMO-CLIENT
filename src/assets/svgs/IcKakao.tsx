import type { SVGProps } from "react";
import { memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIcKakao = ({
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
      d="M18.4746 10C23.7074 10 27.949 13.4207 27.9492 17.6406C27.9492 21.8607 23.7075 25.2822 18.4746 25.2822C17.3692 25.2822 16.3086 25.1273 15.3223 24.8467L12.6475 26.9619C12.3962 27.1605 12.0241 27.0131 11.9775 26.6963L11.3945 22.7168C9.90539 21.367 9 19.5895 9 17.6406C9.00021 13.4207 13.2418 10 18.4746 10Z"
      fill="#E7EDF8"
    />
    <circle
      cx={18.8007}
      cy={18.801}
      r={16.4}
      stroke="#E7EDF8"
      strokeWidth={0.8}
    />
  </svg>
);
const Memo = memo(SvgIcKakao);
export default Memo;
