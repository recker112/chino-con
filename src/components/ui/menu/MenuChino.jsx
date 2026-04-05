import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";

import LogoHero from "./LogoHero";
import ThemeButton from "./ThemeButton";

export default function MenuChino() {

  return (
    <AppBar
      position="fixed"
      elevation={1}
      sx={{
        backdropFilter: "blur(4px)",
      }}
      color="transparent"
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ py: 2 }}>
          <LogoHero />
          <Box sx={{ flexGrow: 1 }} />
          <Typography variant="body2" component="div" sx={{ mr: 2, display: { xs: "none", md: "block" } }}>
            El chino es tan bonito que es como musical
          </Typography>
          <ThemeButton />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
