import React, { useRef } from 'react'
import AppLayout from '../components/layout/AppLayout'
import { IconButton, Stack } from '@mui/material'
import { AttachFile as AttachFileIcon, Send as SendIcon } from '@mui/icons-material'
import { InputBox } from '../components/styles/StylesComponents'

const Chat = () => {
  const containerRef = useRef(null)
  return (
    <>
      <Stack ref={containerRef} boxSizing={'border-box'} spacing={"1rem"} height={"90%"} bgcolor={"#c5cae9"}
        sx={{
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {/* {Messages Renders} */}
        <form style={{
          height: "10%"
        }} >
          <Stack>
            <IconButton>
              <AttachFileIcon />
            </IconButton>
            <InputBox />
            <IconButton>
              <SendIcon />
            </IconButton>
          </Stack>



        </form>
      </Stack>
    </>
  )
}

export default AppLayout()(Chat);