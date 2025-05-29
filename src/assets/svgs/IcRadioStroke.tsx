import type { SVGProps } from "react";
import { memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIcRadioStroke = ({
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
    <rect
      x={0.5}
      y={0.5}
      width={23}
      height={23}
      rx={11.5}
      fill="#E7EDF8"
      stroke="#D7E0EE"
    />
  </svg>
);
const Memo = memo(SvgIcRadioStroke);
export default Memo;
