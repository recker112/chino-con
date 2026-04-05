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

export default function Home() {
  return (
    <>
      <ContainerChino>
        <Typography variant="h6" fontWeight="bold" component="div">
          Selecciona un fonema
        </Typography>
        <Typography variant="body" component="div" color="textSecondary">
          Haz clic en cualquier fonema para escuchar su pronunciación
        </Typography>
        <ConsejosChino />
      </ContainerChino>
      <FooterChino />
    </>
  );
}
