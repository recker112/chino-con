import { Grid, Paper, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { content } from "./Content";
import { updateUserConfig } from "../../../store/reducers/user/configReducer";

export default function TabContentSelector() {
  const tabFonema = useSelector((state) => state.userConfig.tabFonema);
  const fonemaSelected = useSelector(
    (state) => state.userConfig.fonemaSelected,
  );
  const dispatch = useDispatch();

  const getFonemaId = (item) => {
    if (!item) return "";
    return `${item.title}${item.chino}`;
  };

  const buildSelection = (list, index) => ({
    current: list[index] ?? null,
    back: index > 0 ? list[index - 1] : null,
    next: index < list.length - 1 ? list[index + 1] : null,
    index,
    tab: tabFonema,
  });

  const handleSelected = (item) => {
    const list = content[tabFonema] ?? [];
    const index = list.findIndex((currentItem) => getFonemaId(currentItem) === getFonemaId(item));
    if (index === -1) return;

    const selection = buildSelection(list, index);
    const selectedId = getFonemaId(fonemaSelected?.current ?? fonemaSelected);
    if (selectedId === getFonemaId(selection.current)) return;

    dispatch(
      updateUserConfig({ key: "fonemaSelected", value: selection, notSave: true }),
    );
  };

  const selectedId = getFonemaId(fonemaSelected?.current ?? fonemaSelected);

  return (
    <>
      <Typography component="div" color="textSecondary" sx={{ mt: 4 }}>
        Contenido de la Lista {tabFonema + 1}
      </Typography>
      <Grid container spacing={2} sx={{ mt: 1, mb: 4 }}>
        {content[tabFonema]?.map((item, index) => (
          <Grid size={{ xs: 4, sm: 3, md: 1.5 }} key={index}>
            <Paper
              elevation={3}
              sx={{
                p: 2,
                textAlign: "center",
                cursor: "pointer",
                borderColor:
                  selectedId === getFonemaId(item)
                    ? "primary.main"
                    : "transparent",
                borderWidth: 2,
                borderStyle: "solid",
                borderRadius: 2,
                "&:hover": {
                  borderColor: "primary.main",
                  transform: "scale(1.05)",
                },
                transition: "transform 0.2s, border-color 0.2s",
              }}
              onClick={() => handleSelected(item)}
            >
              <Typography
                variant="h5"
                fontWeight="bold"
                color="primary"
                component="div"
              >
                {item.title}
              </Typography>
              <Typography variant="body1" component="div" color="textSecondary">
                {item.chino}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
