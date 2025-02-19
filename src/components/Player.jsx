import {
  faCirclePlay,
  faBackwardStep,
  faForwardStep,
  faCirclePause
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { songsArray } from "../assets/database/songs";
const formatTime = (timeInSecunds) => {
  const minutes = Math.floor(timeInSecunds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(timeInSecunds - minutes * 60)
    .toString()
    .padStart(2, "0");

  return `${minutes} : ${seconds}`;
};
export const Player = ({ duration, audio }) => {
  const randomIndex = Math.floor(Math.random() * 9) + 1;
  const randomIndex1 = Math.floor(Math.random() * 9) + 1;
  const audioPlayer = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [CurrentTime, setCurrentTime] = useState(formatTime(0));
  const progressBar = useRef();
  const newSongs = songsArray[randomIndex]._id;
  const newSongs1 = songsArray[randomIndex1]._id;

  const timeInSeconds = (timeStrings) => {
    const splitArray = timeStrings.split(":");
    const minutes = Number(splitArray[0]);
    const second = Number(splitArray[1]);
    return second + minutes * 60;
  };

  const durationInSeconds = timeInSeconds(duration);
  console.log(durationInSeconds);

  const playPause = () => {
    isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play();
    setIsPlaying(!isPlaying);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      isPlaying && setCurrentTime(formatTime(audioPlayer.current.currentTime));
      progressBar.current.style.setProperty(
        "--_progress",
        (audioPlayer.current.currentTime / durationInSeconds) * 100 + "%"
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isPlaying]);

  return (
    <div className="player">
      <div className="player__controllers">
        <Link to={`/song/${newSongs}`}>
          <FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
        </Link>
        <FontAwesomeIcon
          className="player__icon player__icon--play"
          icon={isPlaying ? faCirclePause : faCirclePlay}
          onClick={() => playPause()}
        />
        <Link to={`/song/${newSongs1}`}>
          <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
        </Link>
      </div>
      <div className="player__progress">
        <p>{CurrentTime}</p>
        <div className="player__bar">
          <div ref={progressBar} className="player__bar-progress"></div>
        </div>
        <p>{"0" + duration}</p>
      </div>
      <audio ref={audioPlayer} className="" src={audio}></audio>
    </div>
  );
};

