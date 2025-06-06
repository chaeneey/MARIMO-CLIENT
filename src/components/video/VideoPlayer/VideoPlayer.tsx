"use client";

import { useState } from "react";

import { IcTurnOffSound, IcTurnOnSound } from "@/assets/svgs";

import {
  videoPlayerLayout,
  videoPlayerSoundIcon,
  videoStyle,
} from "./VideoPlayer.css";

const VideoPlayer = () => {
  const [mutedState, setMutedState] = useState(true);
  const handleClickSoundIcon = () => {
    setMutedState((prev) => !prev);
  };
  return (
    <section className={videoPlayerLayout}>
      <video
        className={videoStyle}
        src={"/video/pre-video.MP4"}
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
