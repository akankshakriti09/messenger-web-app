import React from "react";
import { Outlet } from "react-router-dom";
import { useTheme, styled } from "@mui/material/styles";
import useSettings from "../../hooks/useSettings";
import SideBar from "../../pages/dashboard/SideBar";
import { Stack } from "@mui/material";

const DashboardLayout = () => {
  const theme = useTheme();
  
  console.log(theme);
  const {onToggleMode} = useSettings();

  return (
    <Stack direction="row">
     {/*SideBar*/}
     <SideBar />
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
