import React from 'react'
import { 
  Box, 
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch  } from "@mui/material"
  import { 
    Home,
    Article,
    Group,
    Storefront,
    PeopleAlt,
    Settings,
    AccountBox,
    ModeNight } from '@mui/icons-material';

const Sidebar = ({mode, setMode}) => {
  return (
    <Box 
      flex={1} p={1} 
      sx={{ display: { xs: "none",sm: "block"}}}>
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" src="#home">
              <ListItemIcon>
              <Home />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" src="#home">
              <ListItemIcon>
              <Article />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" src="#home">
              <ListItemIcon>
              <Group />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" src="#home">
              <ListItemIcon>
              <Storefront />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" src="#home">
              <ListItemIcon>
              <PeopleAlt />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" src="#home">
              <ListItemIcon>
              <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" src="#home">
              <ListItemIcon>
              <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" src="#home">
              <ListItemIcon>
              <ModeNight />
              </ListItemIcon>
              <Switch onChange={e=>setMode(mode === "light" ? "dark" : "light")}/>
            </ListItemButton>
          </ListItem>
    </List>
    </Box>
    </Box>
    
  )
}

export default Sidebar