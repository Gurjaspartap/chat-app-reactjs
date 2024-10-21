import { Avatar, Icon, Stack, Typography } from '@mui/material'
import React from 'react'

const Profile = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"} >
      <Avatar sx={{ width: 200, height: 200, objectFit: "contain", marginBottom: "1rem", border: "5px solid white" }} />
      <ProfileCard heading={"Bio"} text={"jdejefje"} />
      <ProfileCard heading={"Username"} text={"@gurjaspartapSingh"} />
    </Stack>
  )
}
const ProfileCard = ({ text, icon, heading }) => {
  return (
    <Stack
      direction={"row"}
      spacing={"1rem"}
      alignItems={"center"}
      color={"white"}
      textAlign={"center"}
    >
      {/* Render the Icon component if passed */}
      {icon && <IconComponent />}

      <Stack>
        <Typography variant="body1">{text}</Typography>
        <Typography variant="caption" color="grey">
          {heading}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Profile;