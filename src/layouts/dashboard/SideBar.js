import React from 'react'
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const SideBar = () => {
    const theme = useTheme
  return (
    <Box
    p={2}
    sx={{
      backgroundColor: theme.palette.background.paper,
      boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
      height: "100vh",
      weight: 100,
    }}
  >
    <Stack direction="column" alignItems={"flex-start"} justifyContent="space-between" sx={{ height: "100%" }} spacing={3}>
      <Stack spacing={4}>
        <Box
          p={1}
          sx={{
            backgroundColor: theme.palette.primary.main,
            height: 64,
            width: 64,
            borderRadius: 1.5,
          }}
        >
          <img src={Logo} alt={"Chat App Logo"} />
        </Box>
        <Stack
          sx={{ width: "max-content" }}
          direction="column"
          p={1}
          spacing={3}
          alignItems={"flex-start"}
        >
          {Nav_Buttons.map((el) =>
            el.index === selected ? (
              <Box
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: 1.5,
                }}
              >
                <IconButton
                  sx={{ width: "max-content", color: "#fff" }}
                  key={el.index}
                >
                  {el.icon}
                </IconButton>
              </Box>
            ) : (
              <IconButton
                onClick={() => {
                  setSelected(el.index);
                }}
                sx={{ width: "max-content", color:theme.palette.mode === "light" ? "#000" : theme.palette.text.primary }}
                key={el.index}
              >
                {el.icon}
              </IconButton>
            )
          )}
          <Divider sx={{ width: "50px" }} />
          {selected === 3 ? (
            <Box
              sx={{
                backgroundColor: theme.palette.primary.main,
                borderRadius: 1.5,
              }}
            >
              <IconButton sx={{ width: "max-content", color: theme.palette.mode === "light" ? "#000" : theme.palette.text.primary }}>
                <Gear />
              </IconButton>
            </Box>
          ) : (
            <IconButton
              onClick={() => {
                setSelected(3);
              }}
              sx={{ width: "max-content", color: "#000" }}
            >
              <Gear />
            </IconButton>
          )}
        </Stack>
      </Stack>

      <Stack p={1} spacing={4}>
        <AntSwitch onChange={()=>{
          onToggleMode();
        }}
         defaultChecked />
        <Avatar src={faker.image.avatarLegacy()} />
      </Stack>
    </Stack>
  </Box>
  )
}

export default SideBar
