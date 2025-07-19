"use client";

import { useState } from "react";

import { IcTurnOffSound, IcTurnOnSound } from "@/assets/svgs";

import {
  videoPlayerLayout,
  videoPlayerSoundIcon,
  videoStyle,
} from "./VideoPlayer.css";

interface VideoPlayerProps {
  realVideo: string[];
}

const VideoPlayer = ({ realVideo }: VideoPlayerProps) => {
  console.log(realVideo);
  const [mutedState, setMutedState] = useState(true);
  const handleClickSoundIcon = () => {
    setMutedState((prev) => !prev);
  };
  return (
    <section className={videoPlayerLayout}>
      <video
        className={videoStyle}
        src={realVideo}
        autoPlay
        muted={mutedState}
        loop
      />
      <div className={videoPlayerSoundIcon} onClick={handleClickSoundIcon}>
        {mutedState ? <IcTurnOffSound /> : <IcTurnOnSound />}
      </div>
    </section>
  );
};

export default VideoPlayer;
