import { Grid, Paper, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import Controls from "./Components/Reproductor/Controls";

export default function ReproductorFonema() {
  const fonemaSelected = useSelector(
    (state) => state.userConfig.fonemaSelected,
  );
  const selectedFonema = fonemaSelected?.current ?? fonemaSelected;

  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        mt: 4,
        textAlign: "center",
        background: `linear-gradient(180deg, rgba(194, 58, 43, 0.05) 0%, transparent 100%)`,
        minHeight: 200,
      }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: 200 }}
      >
        {selectedFonema ? (
          <>
            <Grid size={12}>
              <Typography variant="h2" component="div" fontWeight="bold" color="primary">
                {selectedFonema.title}
              </Typography>
              <Typography variant="h5" component="div" color="textSecondary">
                {selectedFonema.chino}
              </Typography>
            </Grid>
            <Grid>
              <Paper sx={{ px: 2, py: 1,  mt: 2, borderRadius: 2 }}>
                <Typography variant="h6" component="span">
                  {selectedFonema.subchino}
                </Typography>
                <Typography variant="body" component="span" color="textSecondary" sx={{ ml: 1 }}>
                  {selectedFonema.subchinoPinyin}
                </Typography>
                <Typography variant="body" component="div" color="textSecondary">
                  {selectedFonema.subchinoTranslation}
                </Typography>
              </Paper>
            </Grid>
            <Controls />
          </>
        ) : (
          <>
            <Grid size={12}>
              <Typography variant="h2" component="div" color="primary">
                拼
              </Typography>
            </Grid>
            <Grid size={12}>
              <Typography variant="h5" component="div" color="textSecondary">
                Selecciona un fonema para comenzar
              </Typography>
            </Grid>
          </>
        )}
      </Grid>
    </Paper>
  );
}
