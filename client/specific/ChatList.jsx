import { Stack } from '@mui/material';
import React from 'react'
import ChatItem from '../src/shared/ChatItem';

const ChatList = ({ w = "100%", chats = [], chatId, onlineUsers = [], newMessagesAlert = [
  {
    chatId: "",
    count: 0,
  },
], handleDeleteChat, }) => {
  return (
    <Stack width={w} direction={"column"} >
      {chats?.map((data) => {
        return <ChatItem key={data._id} {...data} />
      })}
    </Stack>
  )
}

export default ChatList;