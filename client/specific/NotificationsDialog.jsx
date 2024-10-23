import { Avatar, Button, Dialog, DialogTitle, ListItem, Stack, Typography } from '@mui/material';
import React from 'react';
import { sampleNotifications } from '../constants/sampleData'; // Importing sample notifications

const NotificationsDialog = () => {
  return (
    <Dialog open>
      <Stack p={2}>
        <DialogTitle>Notifications</DialogTitle>
        {/* Check if there are notifications */}
        {sampleNotifications.length > 0 ? (
          sampleNotifications.map((notification) => (
            <NotificationsItem key={notification._id} notification={notification} />
          ))
        ) : (
          <Typography textAlign="center">No notifications</Typography>
        )}
      </Stack>
    </Dialog>
  );
};

// Notification item component
const NotificationsItem = ({ notification }) => {
  const { name, avatar } = notification.sender; // Destructuring notification sender details
  return (
    <ListItem>
      <Stack direction="row" spacing={2} alignItems="center">
        <Avatar alt={name} src={avatar} /> {/* Display the sender's avatar */}
        <Typography variant="body1" sx={{ flexGrow: 1 }}>
          {name}
        </Typography>
        <Stack>
          <Button color='success' onClick={() => handler({ _id, accept: true })}>Accept</Button>
          <Button color='error' onClick={() => handler({ _id, accept: false })}>Decline</Button>
        </Stack>
      </Stack>
    </ListItem>
  );
};

export default NotificationsDialog;
