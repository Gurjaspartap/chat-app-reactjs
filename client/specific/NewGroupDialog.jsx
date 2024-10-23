import React, { useState } from 'react';
import { Avatar, Button, Dialog, DialogTitle, ListItem, Stack, TextField, Typography } from '@mui/material';
import { sampleUsers } from '../constants/sampleData';
import UserItem from '../src/shared/UserItem';
const NewGroup = () => {
  const [groupName, setGroupName] = useState("");

  const [members, setMembers] = useState(sampleUsers);
  const [selectedMembers, setSelectedMembers] = useState([]);
  console.log("selectedMembers", selectedMembers);
  const selectMemberHandler = (id) => {
    if (selectedMembers.includes(id)) {
      setSelectedMembers(prev => prev.filter(member => member !== id))
    } else {
      setSelectedMembers(prev => [...prev, id])

    }

  }
  console.log("selectedMembers", selectedMembers)
  const submitHandler = () => { };
  const closeHandler = () => { }
  return (
    <Dialog open onClose={closeHandler}>
      <Stack p={2} spacing={2}>
        <DialogTitle>Create New Group</DialogTitle>

        {/* Group name input */}
        <TextField
          label="Group Name"
          variant="outlined"
          fullWidth
        />

        {/* Section for Members */}
        <Typography variant="h6" gutterBottom>Members</Typography>

        {/* List of users to select from */}
        <Stack spacing={2}>
          {members.map((user) => (
            <UserItem
              key={user._id}
              user={user}
              handler={() => selectMemberHandler(user._id)} // Pass user ID to handler
              isAdded={selectedMembers.includes(user._id)}
            />
          ))}
        </Stack>

        {/* Button to create group and cancel */}
        <Stack direction={"row"} spacing={2}>
          <Button variant="contained" color="primary" fullWidth>
            Create Group
          </Button>
          <Button variant="contained" color="error" fullWidth>
            cancel
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default NewGroup;
