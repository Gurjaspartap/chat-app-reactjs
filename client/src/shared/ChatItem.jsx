import React, { memo } from 'react'
import { Link } from '../components/styles/StylesComponents'
import { Box, Stack, Typography } from '@mui/material'
import AvatarCard from './AvatarCard'


const ChatItem = ({ avatar = [], name, _id, groupChat = false, sameSender, isOnline, newMessageAlert, index = 0, handleDeleteChatOpen }) => {

  return (
    <Link to={`/chat/${_id}`} onContextMenu={(e) => handleDeleteChatOpen(e, _id, groupChat)} >
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        padding: "1rem",
        cursor: "pointer",
        backgroundColor: sameSender ? "grey" : "white",
        position: "relative"
      }}>
        {/* avatar */}
        <AvatarCard avatar={avatar} />
        <Stack>
          <Typography>{name}</Typography>
          {newMessageAlert && (<Typography>{newMessageAlert.count} New Message  </Typography>)}
        </Stack>
        {isOnline && (
          <Box sx={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "green", position: "absolute", top: "50%", right: "1rem", transform: "translateY(-50%" }}></Box>
        )}
      </div>
    </Link>
  )
}

export default memo(ChatItem)