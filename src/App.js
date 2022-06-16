import React, { useState } from 'react'
import Rightbar from './components/Rightbar'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import Navbar from './components/Navbar'
import { Box, Stack, createTheme, ThemeProvider } from '@mui/material'
import Add from "./components/Add"

const App = () => {
  const [mode, setMode] = useState("light")
  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
    <Navbar />
    <Stack direction="row" spacing={2} justifyContent="space-between">
      <Sidebar mode={mode} setMode={setMode}/>
      <Feed />
      <Rightbar />
    </Stack>
    <Add />
    </Box>
    </ThemeProvider>
  )
}

export default App
