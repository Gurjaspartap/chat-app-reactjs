import { Stack, AvatarGroup, Box, Avatar } from '@mui/material';
import React from 'react';

const AvatarCard = ({ avatar = [], max = 4 }) => {
  return (
    <Stack direction={"row"} spacing={0.5}>
      <AvatarGroup max={max}>
        {avatar.map((src, index) => (
          <Box key={index} width={"5rem"} height={"3rem"}>
            <Avatar
              key={Math.random() * index}
              src={src}
              alt={`Avatar ${index}`}
              sx={{
                width: "3rem",
                height: "3rem",
                position: "absolute",
                left: {
                  xs: `${0.5 + index}rem`,
                  sm: `${index}rem`,
                }
              }}
            />
          </Box>
        ))}
      </AvatarGroup>
    </Stack>
  );
};

export default AvatarCard;
