"use client";

import { useState } from "react";

import { IcTurnOffSound, IcTurnOnSound } from "@/assets/svgs";

import { videoPlayerLayout, videoPlayerSoundIcon } from "./VideoPlayer.css";

const VideoPlayer = () => {
  const [hasSound, setHasSound] = useState(false);
  const handleClickSoundIcon = () => {
    setHasSound((prev) => !prev);
  };
  return (
    <section className={videoPlayerLayout}>
      <div className={videoPlayerSoundIcon} onClick={handleClickSoundIcon}>
        {hasSound ? <IcTurnOnSound /> : <IcTurnOffSound />}
      </div>
    </section>
  );
};

export default VideoPlayer;
