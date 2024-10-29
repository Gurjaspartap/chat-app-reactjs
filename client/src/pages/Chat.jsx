import React, { useRef } from 'react'
import AppLayout from '../components/layout/AppLayout'
import { IconButton, Stack } from '@mui/material'
import { AttachFile as AttachFileIcon, Send as SendIcon } from '@mui/icons-material'
import { InputBox } from '../components/styles/StylesComponents'
import MessageComponent from '../shared/MessageComponent'
import { sampleMessage } from '../../constants/sampleData'

const user = {
  _id: "dsdsdsd",
  name: "Sanju"
}

const Chat = () => {
  const containerRef = useRef(null)
  return (
    <>
      <Stack ref={containerRef} boxSizing={'border-box'} spacing={"1rem"} height={"90%"} bgcolor={"#c5cae9"} padding={"10px"}
        sx={{
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {/* {Messages Renders} */}
        {
          sampleMessage.map((i, index) => {
            return <MessageComponent key={index} message={i} user={user} />
          })}
      </Stack >

      <form style={{
        height: "10%"
      }} >
        <Stack direction={"row"} height={"100%"} padding={"1rem"} alignItems={"center"} position={"relative"}>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <InputBox placeholder='Type a message' />
          <IconButton type='submit' sx={{ backgroundColor: "#ea7070", "&:hover": { backgroundColor: "error.dark" } }} >
            <SendIcon />
          </IconButton>
        </Stack>



      </form >

    </>
  )
}

export default AppLayout()(Chat);