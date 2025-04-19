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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.8438 32.1028C30.3849 32.1028 35.6875 27.8265 35.6875 22.5514C35.6875 17.2763 30.3849 13 23.8438 13C17.3026 13 12 17.2763 12 22.5514C12 24.9882 13.1316 27.2119 14.994 28.8994L15.7219 33.8703C15.78 34.2665 16.2451 34.4513 16.5592 34.203L19.9011 31.5608C21.1344 31.9118 22.4614 32.1028 23.8438 32.1028Z"
      fill="#E7EDF8"
    />
    <circle cx={24} cy={24} r={20.5} stroke="#E7EDF8" />
  </svg>
);
const Memo = memo(SvgIcKakao);
export default Memo;
