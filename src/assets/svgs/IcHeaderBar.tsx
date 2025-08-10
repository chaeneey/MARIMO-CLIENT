import type { SVGProps } from "react";
import { memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIcHeaderBar = ({
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
    <circle
      cx={19}
      cy={19}
      r={18.5682}
      stroke="#DDFFC9"
      strokeWidth={0.863636}
    />
    <rect
      x={7.77295}
      y={11.2275}
      width={23.3182}
      height={1.72727}
      rx={0.863636}
      fill="#DDFFC9"
    />
    <rect
      x={7.77295}
      y={18.1367}
      width={23.3182}
      height={1.72727}
      rx={0.863636}
      fill="#DDFFC9"
    />
    <rect
      x={7.77295}
      y={25.0459}
      width={23.3182}
      height={1.72727}
      rx={0.863636}
      fill="#DDFFC9"
    />
  </svg>
);
const Memo = memo(SvgIcHeaderBar);
export default Memo;
