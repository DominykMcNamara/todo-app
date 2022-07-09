import React, { useState, useContext, useMemo, createContext } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Container } from "@mui/system";
import { Typography } from "@mui/material";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { AddTodo } from "../components/AddTodo";
import { TodoList } from "../components/TodoList";
import Background from "../assets/bg-desktop-light.jpg";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const Home = () => {
  const [mode, setMode] = useState("light");
  let colorMode = useContext(ColorModeContext);
  let theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
      },
    }),
    [] 
  ); 

  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Container id="app" maxWidth="false" disableGutters={true}>
            <Box
              component="header"
              sx={{
                backgroundImage: `url(${Background})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "300px",
              }}
            >
              <Box
                className="header-content"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: "541px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: "0 auto",
                  paddingTop: "81px",
                }}
              >
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    fontFamily: "Josefin Sans",
                    fontStyle: "bold",
                    color: "#ffffff",
                    letterSpacing: "15px",
                    fontSize: "40px",
                    lineHeight: "40px",
                  }}
                >
                  TODO
                </Typography>
                <IconButton
                  sx={{ color: "#ffffff", height: "21px", width: "21px" }}
                  onClick={colorMode.toggleColorMode}
                >
                  {theme.palette.mode === "light" ? (
                    <DarkModeIcon />
                  ) : (
                    <LightModeIcon />
                  )}
                </IconButton>
              </Box>
            </Box>
            <Box
              component="section"
              sx={{ position: "relative", bottom: "100px" }}
            >
              <AddTodo />
            </Box>
            <Box
              component="section"
              sx={{ position: "relative", bottom: "100px" }}
            >
              <TodoList />
            </Box>
          </Container>
        </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
