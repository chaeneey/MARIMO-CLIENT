"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import * as styles from "./VideoThumbnail.css";

interface VideoThumbnailProps {
  imageUrl: string;
  videoUrl: string;
}

const VideoThumbnail = ({ imageUrl, videoUrl }: VideoThumbnailProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovering(true);
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    videoRef.current?.pause();
    videoRef.current!.currentTime = 0;
  };
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={styles.thumbnailContainer}
    >
      <Image
        src={imageUrl}
        alt="썸네일"
        fill
        className={styles.thumbnailImage}
        style={{ opacity: isHovering ? 0 : 1 }}
      />
      <video
        className={styles.thubnailVideo}
        ref={videoRef}
        src={videoUrl}
        muted
        playsInline
        loop
        style={{ opacity: isHovering ? 1 : 0 }}
      />
    </div>
  );
};

export default VideoThumbnail;
