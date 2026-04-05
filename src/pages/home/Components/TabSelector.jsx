/**
 * MUI
 */
import { Box, Tab, Tabs } from "@mui/material";

/**
 * Redux
 */
import { useDispatch, useSelector } from "react-redux";
import { updateUserConfig } from "../../../store/reducers/user/configReducer";

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

export default function TabSelector({ tabs, }) {
  const tabFonema = useSelector((state) => state.userConfig.tabFonema);
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    dispatch(updateUserConfig({ key: "tabFonema", value: newValue, notSave: true }));
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={tabFonema} onChange={handleChange} aria-label="tabs" centered>
          {tabs.map((tab, index) => (
            <Tab key={index} label={tab.label} {...a11yProps(index)} />
          ))}
        </Tabs>
      </Box>
    </Box>
  );
}
