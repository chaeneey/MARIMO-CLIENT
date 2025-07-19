import type { SVGProps } from "react";
import { memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIcComplete80 = ({
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
    <rect x={0.876709} width={80} height={80} rx={40} fill="#1F2126" />
    <path
      d="M23.8767 36.9506L37.4119 54.4297L57.4733 26"
      stroke="#DDFFC9"
      strokeWidth={6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const Memo = memo(SvgIcComplete80);
export default Memo;
