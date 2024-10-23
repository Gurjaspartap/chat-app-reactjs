import { Avatar, IconButton, ListItem, Stack, Typography, CircularProgress } from '@mui/material';
import React, { memo } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const UserItem = ({ user, handler, handlerIsLoading, isAdded }) => {
  const { name, _id, avatar } = user;

  return (
    <ListItem
      sx={{
        padding: '10px 15px', // Padding for spacing
        borderRadius: '8px', // Rounded corners
        transition: 'background-color 0.3s ease', // Smooth hover effect
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.04)', // Slight hover background
        },
      }}
    >
      <Stack direction="row" spacing={2} alignItems="center" width="100%">

        {/* Display user avatar with fallback initials */}
        <Avatar
          src={avatar}
          alt={name}
          sx={{ width: 40, height: 40, borderRadius: '50%' }}
        >
          {name.charAt(0)}
        </Avatar>

        {/* Display user name with custom typography */}
        <Typography
          variant="body1"
          sx={{ fontWeight: 500, flex: 1, color: 'text.primary' }} // Flexible width
        >
          {name}
        </Typography>

        {/* Add/Remove friend button */}
        <IconButton
          onClick={() => handler(_id)}
          disabled={handlerIsLoading}
          size="small"
          sx={{
            bgcolor: isAdded ? 'error.main' : 'success.main',
            color: 'white',
            '&:hover': {
              bgcolor: isAdded ? 'error.dark' : 'success.dark', // Hover effect for better feedback
            },
            width: 36,
            height: 36,
            borderRadius: '50%', // Circular button
          }}
        >
          {/* Conditional loading spinner and icons */}
          {handlerIsLoading ? (
            <CircularProgress size={20} sx={{ color: 'white' }} /> // Smaller spinner
          ) : (
            isAdded ? <RemoveIcon fontSize="small" /> : <AddIcon fontSize="small" />
          )}
        </IconButton>
      </Stack>
    </ListItem>
  );
};

export default memo(UserItem);
