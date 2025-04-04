import React from "react";
import Image from "next/image";
import { imageStyle, imageWrapperStyle } from "./CustomImage.css";

export interface ImageProps {
  src: string;
  alt: string;
  priority?: boolean;
}

const CustomImage = ({ src, alt, priority }: ImageProps) => {
  return (
    <div className={imageWrapperStyle}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className={imageStyle}
        priority={priority}
      />
    </div>
  );
};

export default CustomImage;
