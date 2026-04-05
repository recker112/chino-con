/**
 * React
 */
import { Link } from "react-router-dom";

/**
 * MUI
 */
import { Button, Grid, Skeleton, Typography, useTheme } from "@mui/material";

/**
 * Components
 */
import { bouncy } from "ldrs";

bouncy.register();

// Función auxiliar para convertir color hex a filtro CSS
function getColorFilter(hexColor) {
  // Convertir hex a RGB
  const r = parseInt(hexColor.slice(1, 3), 16) / 255;
  const g = parseInt(hexColor.slice(3, 5), 16) / 255;
  const b = parseInt(hexColor.slice(5, 7), 16) / 255;

  return `sepia(30%) saturate(${Math.max(r, g, b) * 1000}%) hue-rotate(${
    (Math.atan2(Math.sqrt(3) * (g - b), 2 * r - g - b) * 180) / Math.PI
  }deg)`;
}

export default function Fallback({ text, loading, homeButton = false }) {
  const theme = useTheme();

  return (
    <Grid
      container
      justifyContent="center"
      alignContent="center"
      alignItems="center"
      component="main"
      spacing={2}
      direction="column"
    >
      <Skeleton
        variant="rectangular"
        width={90}
        height={90}
      />

      <Grid container justifyContent="center">
        {loading && (
          <l-bouncy
            size="45"
            speed="1.75"
            color={theme.palette.primary.main}
          ></l-bouncy>
        )}
      </Grid>

      <Grid>
        <Typography variant="h6" style={{ opacity: 1 }}>
          Chino con Mati
        </Typography>
      </Grid>

      <Grid>
        <Typography size={16} sx={{ opacity: 0.5, px: 5 }} textAlign="center">
          {text}
        </Typography>
      </Grid>

      {homeButton && (
        <Grid textAlign="center">
          <Button variant="text" color="primary" component={Link} to="/chino-con">
            Reintentar
          </Button>
        </Grid>
      )}
    </Grid>
  );
}
