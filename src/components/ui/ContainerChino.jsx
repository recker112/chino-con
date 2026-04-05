/**
 * MUI
 */
import { Box, Container } from "@mui/material";


/**
 * Components
 */
import MenuChino from "./menu/MenuChino";

export default function ContainerChino({ full, children }) {
  return (
    <Box component="main">
      <MenuChino />
      {full ? (
        children
      ) : (
        <Container
          disableGutters={true}
          sx={{ mt: { xs: 18 }, mb: { xs: 10, sm: 3 }, px: 2 }}
        >
          {children}
        </Container>
      )}
    </Box>
  );
}