import { Paper, Typography } from "@mui/material";

export default function ConsejosChino() {
  return (
    <Paper elevation={0} sx={{ mt: 3, p: 2, borderRadius: 2 }}>
      <Typography variant="body1" fontWeight="bold" gutterBottom>
        Consejos
      </Typography>
      <Typography variant="body2" gutterBottom>
        <Typography component="span" color="primary" sx={{ mr: 1.5 }}>*</Typography> 
        Usa la repetición automática para practicar
      </Typography>
      <Typography variant="body2" gutterBottom>
        <Typography component="span" color="primary" sx={{ mr: 1.5 }}>*</Typography> 
        Reduce la velocidad para escuchar mejor los tonos
      </Typography>
      <Typography variant="body2" gutterBottom>
        <Typography component="span" color="primary" sx={{ mr: 1.5 }}>*</Typography> 
        Navega con las flechas para repasar todos los fonemas
      </Typography>
    </Paper>
  );
}
