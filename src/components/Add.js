import React, { useState } from 'react'
import { 
    Avatar,
    Tooltip, 
    Fab,
    Modal,
    Box, 
    styled,
    Typography,
    TextField,
    Stack,
    Button,
    ButtonGroup } from '@mui/material';
import {
    Image,
    EmojiEmotions,
    VideoCameraBack,
    PersonAdd,
    DateRange } from '@mui/icons-material';

import AddIcon from '@mui/icons-material/Add';

const StyledModal = styled(Modal) ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
})

const UserBox = styled(Box) ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
})

const Add = () => {
    const [open, setOpen] = useState(false);
  return (
    <>
    <Tooltip 
    onClick={e=>setOpen(true)}
    title="Delete" 
    sx={{ 
        position:"fixed", 
        bottom:20, 
        left:{xs:"calc(50%)", md:30}}}>
    <Fab color="primary" aria-label="add">
        <AddIcon />
    </Fab>
    </Tooltip>
    <StyledModal
  open={open}
  onClose={e=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
    <Typography variant="h6" color="gray" textAlign="center">Create post</Typography>
    <UserBox>
        <Avatar 
            src="http://staffmobility.eu/sites/default/files/isewtweetbg.jpg"
            sx={{ width: 30, height: 30 }}
        />
        <Typography fontWeight={500} variant="span">
            Sharath Kumar
        </Typography>
    </UserBox>
    <TextField
          sx={{width:"100%"}}
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder="What's on your mind ?"
          variant="standard"
        />
    <Stack direction="row" gap={1} mt={2} mb={3}>
        <EmojiEmotions color="primary"/>
        <Image color="secondary"/>
        <VideoCameraBack color="success"/>
        <PersonAdd color="error"/>
    </Stack>
    <ButtonGroup 
        fullWidth
        variant="contained" 
        aria-label="outlined primary button group">
        <Button>Post</Button>
        <Button sx={{width:"100px"}}>
            <DateRange />
        </Button>
    </ButtonGroup>
  </Box>
</StyledModal>
    </>
  )
}

export default Add
