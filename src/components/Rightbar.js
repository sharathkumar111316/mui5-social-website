import React from 'react'
import { 
  Box,
  Typography,
  Avatar,
  AvatarGroup,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider } from "@mui/material"

const Rightbar = () => {
  return (
    <Box
    flex={1} p={1} 
    sx={{ display: { xs: "none", sm: "block"}}}>
      <Box position="fixed" width={300}>
      <Typography variant="h6" fontWeight={100}>Online Friends</Typography>
    <AvatarGroup max={7}>
      <Avatar alt="Remy Sharp" src="http://staffmobility.eu/sites/default/files/isewtweetbg.jpg" />
      <Avatar alt="Travis Howard" src="http://staffmobility.eu/sites/default/files/isewtweetbg.jpg" />
      <Avatar alt="Cindy Baker" src="http://staffmobility.eu/sites/default/files/isewtweetbg.jpg" />
      <Avatar alt="Agnes Walker" src="http://staffmobility.eu/sites/default/files/isewtweetbg.jpg" />
      <Avatar alt="Trevor Henderson" src="http://staffmobility.eu/sites/default/files/isewtweetbg.jpg" />
      <Avatar alt="Remy Sharp" src="http://staffmobility.eu/sites/default/files/isewtweetbg.jpg" />
      <Avatar alt="Travis Howard" src="http://staffmobility.eu/sites/default/files/isewtweetbg.jpg" />
      <Avatar alt="Cindy Baker" src="http://staffmobility.eu/sites/default/files/isewtweetbg.jpg" />
      <Avatar alt="Agnes Walker" src="http://staffmobility.eu/sites/default/files/isewtweetbg.jpg" />
      <Avatar alt="Trevor Henderson" src="http://staffmobility.eu/sites/default/files/isewtweetbg.jpg" />
    </AvatarGroup>
    <Typography variant="h6" fontWeight={100} mt={2} mb={2}>Latest Photos</Typography>
    <ImageList cols={3} rowHeight={100} gap={5}>
      <ImageListItem>
        <img 
          src="http://staffmobility.eu/sites/default/files/isewtweetbg.jpg"
          alt=""
        />
      </ImageListItem>
      <ImageListItem>
        <img 
          src="http://staffmobility.eu/sites/default/files/isewtweetbg.jpg"
          alt=""
        />
      </ImageListItem>
      <ImageListItem>
        <img 
          src="http://staffmobility.eu/sites/default/files/isewtweetbg.jpg"
          alt=""
        />
      </ImageListItem>
    </ImageList>
    <Typography variant="h6" fontWeight={100} mt={2}>Latest Conversations</Typography>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="http://staffmobility.eu/sites/default/files/isewtweetbg.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  )
}

export default Rightbar