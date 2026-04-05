import { Box, Button } from "@mui/material";
import { updateTheme } from "../store/reducers/user/configReducer";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();

  return (
    <Box>
      <Button variant="contained" color="primary" onClick={() => {
        dispatch(updateTheme());
      }}>
        Cambiar tema
      </Button>
    </Box>
  )
}
