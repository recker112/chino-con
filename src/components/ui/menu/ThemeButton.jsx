/**
 * MUI
 */
import { IconButton } from "@mui/material";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

/**
 * Redux
 */
import { useDispatch, useSelector } from "react-redux";
import { updateTheme } from "../../../store/reducers/user/configReducer";

export default function ThemeButton() {
  const theme = useSelector((state) => state.userConfig.theme);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(updateTheme());
  }

  return (
    <IconButton
      size="small"
      edge="start"
      aria-label="menu"
      sx={{ mr: 2, color: "white" }}
      onClick={handleClick}
    >
      {theme === "light" ? <LightModeIcon color='action' /> : <DarkModeIcon />}
    </IconButton>
  );
}
