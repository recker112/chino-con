import { Box, Typography } from "@mui/material";

/**
 * Components
 */
import portada from "./../../../assets/portada.png";

export default function LogoHero() {
  return (
    <>
      <Box
        component="img"
        src={portada}
        alt="Chino Con"
        sx={{ height: 70, mr: 2, borderRadius: 2 }}
      />
      <Box sx={{ flexGrow: 1 }}>
        <Typography
          variant="body"
          fontWeight="bold"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          Chino Con Mati
        </Typography>
        <Typography
          variant="caption"
          component="div"
          color="textSecondary"
          sx={{ flexGrow: 1 }}
        >
          Practiquemos los Fonemas
        </Typography>
      </Box>
    </>
  );
}
