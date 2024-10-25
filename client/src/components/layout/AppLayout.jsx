import React, { useState } from 'react'
import Header from './Header'
import Title from '../../shared/Title'
import { Grid } from '@mui/material'
import ChatList from '../../../specific/ChatList';
import sampleChats from '../../../constants/sampleData';
import Profile from '../../../specific/Profile';

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    const [selectedChat, useSelectedChat] = useState(null)
    const handleSelectedChat = (chatId) => {
      useSelectedChat(chatId)
    }
    return (
      <div>
        <Title />
        <Header />

        {/* Grid Layout */}
        <Grid container sx={{ height: 'calc(100vh - 4rem)' }}>
          {/* First Grid item - hidden on xs, visible on sm and above */}
          <Grid item sm={4} md={3} sx={{ display: { xs: 'none', sm: 'block' }, height: '100%', bgcolor: 'grey' }}>
            <ChatList chats={sampleChats} chatId={"1"} />
          </Grid>

          {/* Second Grid item - full width on xs, reduces on larger screens */}
          <Grid item xs={12} md={8} lg={6} sx={{ height: '100%' }}>
            <WrappedComponent {...props} chatId={selectedChat} />
          </Grid>

          {/* Third Grid item - hidden on xs, visible on md and above */}
          <Grid item md={4} lg={3} sx={{ display: { xs: 'none', md: 'block' }, height: '100%', padding: '2rem', bgcolor: 'rgba(0,0,0,0.85)' }}>
            <Profile />
          </Grid>
        </Grid>



        <div>Footer</div>
      </div>
    );
  };
};

export default AppLayout;
