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

// Função para formatar tempo corretamente
const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(timeInSeconds % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

export const Player = ({ duration, audio }) => {
  const audioPlayer = useRef(null);
  const progressBar = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  // Converte tempo para segundos
  const timeInSeconds = (timeString) => {
    const [minutes, seconds] = timeString.split(":").map(Number);
    return minutes * 60 + seconds;
  };

  const durationInSeconds = timeInSeconds(duration);

  // Garante que os índices não ultrapassem o tamanho do array
  const getRandomSongId = () => {
    const randomIndex = Math.floor(Math.random() * songsArray.length);
    return songsArray[randomIndex]?._id || ""; // Evita erro de acesso a índice inválido
  };

  const previousSongId = getRandomSongId();
  const nextSongId = getRandomSongId();

  const playPause = () => {
    if (!audioPlayer.current) return;
    if (isPlaying) {
      audioPlayer.current.pause();
    } else {
      audioPlayer.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (!audioPlayer.current) return;

    const updateProgress = () => {
      if (audioPlayer.current) {
        setCurrentTime(audioPlayer.current.currentTime);
        const progress = (audioPlayer.current.currentTime / durationInSeconds) * 100;
        progressBar.current.style.setProperty("--_progress", `${progress}%`);
      }
    };

    const intervalId = setInterval(updateProgress, 1000);

    return () => clearInterval(intervalId);
  }, [durationInSeconds]); // Agora a atualização do tempo ocorre corretamente

  return (
    <div className="player">
      <div className="player__controllers">
        <Link to={`/song/${previousSongId}`}>
          <FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
        </Link>
        <FontAwesomeIcon
          className="player__icon player__icon--play"
          icon={isPlaying ? faCirclePause : faCirclePlay}
          onClick={playPause}
        />
        <Link to={`/song/${nextSongId}`}>
          <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
        </Link>
      </div>
      <div className="player__progress">
        <p>{formatTime(currentTime)}</p>
        <div className="player__bar">
          <div ref={progressBar} className="player__bar-progress"></div>
        </div>
        <p>{formatTime(durationInSeconds)}</p>
      </div>
      <audio ref={audioPlayer} src={audio}></audio>
    </div>
  );
};
