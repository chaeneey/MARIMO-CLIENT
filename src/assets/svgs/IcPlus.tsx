import type { SVGProps } from "react";
import { memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIcPlus = ({
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
    <rect x={1.82617} y={5.68652} width={10} height={1} fill="#0A0A0A" />
    <rect
      x={7.32617}
      y={1.18652}
      width={10}
      height={1}
      transform="rotate(90 7.32617 1.18652)"
      fill="#0A0A0A"
    />
  </svg>
);
const Memo = memo(SvgIcPlus);
export default Memo;
