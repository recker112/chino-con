import { Box, Button, Typography } from "@mui/material";
import { updateTheme } from "../store/reducers/user/configReducer";
import { useDispatch } from "react-redux";
import ContainerChino from "../components/ui/ContainerChino";

export default function Home() {
  const dispatch = useDispatch();

  return (
    <ContainerChino>
      <Typography variant="h4" fontWeight="bold" component="div" sx={{ flexGrow: 1 }}>
        Selecciona un fonema
      </Typography>
      <Typography variant="body" component="div" sx={{ flexGrow: 1 }}>
        Haz clic en cualquier fonema para escuchar su pronunciación
      </Typography>
      <Box sx={{ mt: 2, height: 10000 }}>
        Cambia el tema desde el botón de arriba, o desde el menú de tu sistema operativo. También puedes cambiarlo desde las opciones de tu navegador, o desde la configuración de tu sistema operativo.
      </Box>
    </ContainerChino>
  )
}
