import type { SVGProps } from "react";
import { memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIcStrokeLeft = ({
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
      d="M318.877 48.75H2.87695L50.377 1.25"
      stroke="white"
      strokeWidth={2}
    />
  </svg>
);
const Memo = memo(SvgIcStrokeLeft);
export default Memo;
