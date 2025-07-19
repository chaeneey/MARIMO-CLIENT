import type { SVGProps } from "react";
import { memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIcMarimoSymbol = ({
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
      x={1.19336}
      y={0.5}
      width={172}
      height={172}
      rx={24.848}
      fill="#0A0A0A"
    />
    <rect
      x={1.19336}
      y={0.5}
      width={172}
      height={172}
      rx={24.848}
      stroke="#70757C"
    />
    <g clipPath="url(#clip0_2354_21797)">
      <path
        d="M109.909 53.6133C109.909 53.6133 115.319 87.4883 98.0065 113.714L85.293 118.184C85.293 118.184 94.7604 99.5085 95.8424 84.2101C96.9244 68.9117 98.0065 56.8915 98.0065 56.8915L109.909 53.6133Z"
        fill="#7D9652"
      />
      <path
        d="M147.713 54.4961C147.713 54.4961 154.271 92.9507 136.959 119.177L123.434 123.438C123.434 123.438 132.631 100.6 133.713 85.3015C134.795 70.0031 135.877 57.9829 135.877 57.9829L147.713 54.4961Z"
        fill="#7D9652"
      />
      <path
        d="M39.8215 94.2756L30.8733 88.5059C30.8733 88.5059 14.6432 126.752 44.9394 119.103C45.6211 118.928 46.2919 118.72 46.952 118.502C37.6792 110 39.8215 94.2756 39.8215 94.2756Z"
        fill="#DAFFA3"
      />
      <path
        d="M100.891 48.1602C93.6309 53.5255 75.648 108.818 46.9531 118.489C49.5824 120.904 53.1422 122.74 57.9247 123.461C79.5648 126.739 109.861 53.5255 109.861 53.5255C109.861 53.5255 109.872 53.4272 109.883 53.2633L100.891 48.1602Z"
        fill="#DAFFA3"
      />
      <path
        d="M137.37 49.0352C127.686 58.389 111.986 109.017 85.293 118.185C87.9114 120.534 91.6876 122.293 96.3835 123.003C116.152 125.997 143.19 65.043 147.712 54.498L137.37 49.0352Z"
        fill="#DAFFA3"
      />
    </g>
    <defs>
      <clipPath id="clip0_2354_21797">
        <rect
          width={122.938}
          height={76.044}
          fill="white"
          transform="translate(26.041 48.1602)"
        />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(SvgIcMarimoSymbol);
export default Memo;
