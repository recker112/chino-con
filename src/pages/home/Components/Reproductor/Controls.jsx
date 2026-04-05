import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid, IconButton, Slider, Menu, MenuItem } from "@mui/material";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import { content } from "../Content";
import { updateUserConfig } from "../../../../store/reducers/user/configReducer";

const SPEEDS = [0.5, 0.75, 1, 1.5];
const REPEAT_OPTIONS = [1, 2, 3, 5];

export default function Controls() {
  const fonemaSelected = useSelector(
    (state) => state.userConfig.fonemaSelected,
  );
  const tabFonema = useSelector((state) => state.userConfig.tabFonema);
  const dispatch = useDispatch();

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [repeatCount, setRepeatCount] = useState(1);
  const [_, setCurrentRepeat] = useState(0);

  const [anchorElSpeed, setAnchorElSpeed] = useState(null);
  const [anchorElRepeat, setAnchorElRepeat] = useState(null);

  const audioRef = useRef(null);
  const selectedFonema = fonemaSelected?.current ?? fonemaSelected;

  const getFonemaId = (item) => {
    if (!item) return "";
    return `${item.title}${item.chino}`;
  };

  const selectFonema = (item) => {
    const list = content[tabFonema] ?? [];
    const index = list.findIndex((currentItem) => getFonemaId(currentItem) === getFonemaId(item));
    if (index === -1) return;

    dispatch(
      updateUserConfig({
        key: "fonemaSelected",
        value: {
          current: list[index] ?? null,
          back: index > 0 ? list[index - 1] : null,
          next: index < list.length - 1 ? list[index + 1] : null,
          index,
          tab: tabFonema,
        },
        notSave: true,
      }),
    );
  };

  useEffect(() => {
    if (!selectedFonema?.audio) {
      audioRef.current = null;
      return;
    }

    const audio = new Audio(selectedFonema.audio);
    audioRef.current = audio;
    audio.volume = volume;
    audio.playbackRate = playbackRate;

    audio.onplay = () => setIsPlaying(true);
    audio.onpause = () => setIsPlaying(false);

    audio.onended = () => {
      setIsPlaying(false);
      setCurrentRepeat(prev => {
        if (prev + 1 < repeatCount) {
          setTimeout(() => {
            audio.currentTime = 0;
            audio.play();
          }, 200); // pequeño delay opcional
          return prev + 1;
        } else {
          return 0;
        }
      });
    };

    return () => {
      audio.pause();
      audio.currentTime = 0;
      audio.onplay = null;
      audio.onpause = null;
      audio.onended = null;
    };
  }, [selectedFonema, playbackRate, volume, repeatCount]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  const handleVolumeChange = (_, newValue) => {
    setVolume(newValue);
  };

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      setCurrentRepeat(0);
      try {
        await audio.play();
      } catch {
        setIsPlaying(false);
      }
    } else {
      audio.pause();
    }
  };

  // Velocidad
  const handleSpeedClick = (event) => {
    setAnchorElSpeed(event.currentTarget);
  };
  const handleSpeedClose = () => {
    setAnchorElSpeed(null);
  };
  const handleSpeedSelect = (speed) => {
    setPlaybackRate(speed);
    setAnchorElSpeed(null);
  };

  // Repetir
  const handleRepeatClick = (event) => {
    setAnchorElRepeat(event.currentTarget);
  };
  const handleRepeatClose = () => {
    setAnchorElRepeat(null);
  };
  const handleRepeatSelect = (count) => {
    setRepeatCount(count);
    setAnchorElRepeat(null);
  };

  const handlePrev = () => {
    if (!fonemaSelected?.back) return;
    selectFonema(fonemaSelected.back);
  };

  const handleNext = () => {
    if (!fonemaSelected?.next) return;
    selectFonema(fonemaSelected.next);
  };

  return (
    <>
      <Grid size={12} sx={{ mt: 4 }}>
        <IconButton disabled={!fonemaSelected?.back} onClick={handlePrev}>
          <SkipPreviousIcon />
        </IconButton>

        <IconButton color="primary" size="large" onClick={togglePlay}>
          {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
        </IconButton>

        <IconButton disabled={!fonemaSelected?.next} onClick={handleNext}>
          <SkipNextIcon />
        </IconButton>
      </Grid>

      <Grid container alignItems="center" justifyContent="center" size={12} sx={{ mt: 1 }}>
        <VolumeDownIcon sx={{mr: 2}} />
        <Slider
          value={volume}
          min={0}
          max={1}
          step={0.01}
          onChange={handleVolumeChange}
          aria-labelledby="volume-slider"
          sx={{ width: 200 }}
        />
        <VolumeUpIcon sx={{ml: 2}} />
      </Grid>

      <Grid container alignItems="center" justifyContent="center" size={12} sx={{ mt: 2 }}>
        <Button
          variant="outlined"
          color="primary"
          sx={{ mx: 1 }}
          onClick={handleSpeedClick}
        >
          Velocidad x{playbackRate}
        </Button>
        <Menu
          anchorEl={anchorElSpeed}
          open={Boolean(anchorElSpeed)}
          onClose={handleSpeedClose}
        >
          {SPEEDS.map(speed => (
            <MenuItem key={speed} onClick={() => handleSpeedSelect(speed)}>
              x{speed}
            </MenuItem>
          ))}
        </Menu>

        <Button
          variant="outlined"
          color="primary"
          sx={{ mx: 1 }}
          onClick={handleRepeatClick}
        >
          Repetir x{repeatCount}
        </Button>
        <Menu
          anchorEl={anchorElRepeat}
          open={Boolean(anchorElRepeat)}
          onClose={handleRepeatClose}
        >
          {REPEAT_OPTIONS.map(count => (
            <MenuItem key={count} onClick={() => handleRepeatSelect(count)}>
              x{count}
            </MenuItem>
          ))}
        </Menu>
      </Grid>
    </>
  );
}
