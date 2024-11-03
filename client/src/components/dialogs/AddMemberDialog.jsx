import { Button, Dialog, DialogTitle, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { sampleUsers } from '../../../constants/sampleData'
import UserItem from '../../shared/UserItem'
const AddMemberDialog = ({ addMember, isLoadingAddMember, chatId }) => {
  const addMemberSubmitHandler = () => {
  }
  const closeHandler = () => {

  }
  const [groupName, setGroupName] = useState("");

  const [members, setMembers] = useState(sampleUsers);
  const [selectedMembers, setSelectedMembers] = useState([]);
  const selectMemberHandler = (id) => {
    if (selectedMembers.includes(id)) {
      setSelectedMembers(prev => prev.filter(member => member !== id))
    } else {
      setSelectedMembers(prev => [...prev, id])

    }

  }
  return (
    <Dialog onClose={closeHandler}>
      <Stack spacing={"1rem"}>
        <DialogTitle textAlign={"center"}>Add Member</DialogTitle>
        <Stack padding={"1rem"}>
          {members.length > 0 ? members.map(i => (<UserItem key={i.id} user={i} handler={selectMemberHandler} isAdded={selectedMembers.includes(i._id)} />)) : (<Typography textAlign={"center"} >No Friends</Typography>)}
        </Stack>

      </Stack>
      <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} pb={"1rem"}>
        <Button color='error' onClick={closeHandler}>Cancel</Button>
        <Button variant='contained' onClick={addMemberSubmitHandler} >Subimt</Button>
      </Stack>
    </Dialog>
  )
}

export default AddMemberDialog