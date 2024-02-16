import React from "react";
import { Box, Stack, TextField} from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import { styled, useTheme } from "@mui/material/styles";

const Conversation = () => {
  const theme = useTheme();
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      {/* Chat Header */}
      <Header />

      {/*Msg*/}
      <Box width={"100%"} sx={{ flexGrow: 1 }}></Box>
      {/*Chat Footer */}
      <Footer />

    </Stack>
  );
};

export default Conversation;
