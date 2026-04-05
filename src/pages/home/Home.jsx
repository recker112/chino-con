/**
 * MUI
 */
import { Typography } from "@mui/material";

/**
 * Components
 */
import ContainerChino from "../../components/ui/ContainerChino";
import FooterChino from "../../components/ui/FooterChino";
import ConsejosChino from "./ConsejosChino";
import SelectorFonemas from "./SelectorFonemas";
import ReproductorFonema from "./ReproductorFonema";

export default function Home() {
  return (
    <>
      <ContainerChino>
        <Typography variant="h6" fontWeight="bold" component="div">
          Selecciona un fonema
        </Typography>
        <Typography variant="body" component="div" color="textSecondary" sx={{ mb: 4 }}>
          Haz clic en cualquier fonema para escuchar su pronunciación
        </Typography>
        <SelectorFonemas />
        <ReproductorFonema />
        <ConsejosChino />
      </ContainerChino>
      <FooterChino />
    </>
  );
}
