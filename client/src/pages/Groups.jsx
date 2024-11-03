import { Add as AddIcon, Delete as DeleteIcon, Done as DoneIcon, Edit as EditIcon, KeyboardBackspace as KeyboardBackspaceIcon, Menu as MenuIcon } from '@mui/icons-material';
import { Box, Button, Drawer, Grid, IconButton, Stack, TextField, Tooltip, Typography } from '@mui/material';
import React, { lazy, memo, Suspense, useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import AvatarCard from '../shared/AvatarCard';
import sampleChats from '../../constants/sampleData';
// import ConfirmDeleteDialog from '../components/dialogs/ConfirmDeleteDialog';
const ConfirmDeleteDialog = lazy(() => import("../components/dialogs/ConfirmDeleteDialog"))
const AddMemberDialog = lazy(() => import("../components/dialogs/AddMemberDialog"))

const isAddMember = true;
const Groups = () => {
  const chatId = useSearchParams()[0].get("group");
  const [groupName, setGroupName] = useState("")
  const [groupNameUpdatedValue, setGroupNameUpdatedValue] = useState("")
  const [confirmDeleteDialog, setConfirmDeleteDialog] = useState(false)
  const openAddMemberHandler = () => {
    console.log("add member")
  }

  const openConfirmDeleteHandler = () => {
    setConfirmDeleteDialog(true)
    console.log("delete group")
  }
  const confirmDeleteHandler = () => {
    setConfirmDeleteDialog(false)

  }

  const navigate = useNavigate();
  console.log("chatId", chatId)
  const [isEdit, setIsEdit] = useState(false)
  const navigateBack = () => {
    navigate("/");
  };
  const updateGroupName = () => {
    setIsEdit(false)
    setGroupName(groupNameUpdatedValue)
  }
  useEffect(() => {
    setGroupName("Group Name")
    setGroupNameUpdatedValue("Group Name")
    return () => {
      setGroupName("")
      setGroupNameUpdatedValue("")
    }
  }, [])
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleMobile = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleMobileClose = () => {
    setIsMobileMenuOpen(false);
    console.log("handleMobileClose")
  };

  const IconBtns = (
    <>
      <Box sx={{
        display: { xs: "block", sm: "none" },
        position: "fixed",
        right: "1rem",
        top: "6rem",
        bgcolor: "rgba(0, 0, 0, 0.5)",
        color: "#FFFFFF",
        "&:hover": {
          bgcolor: "rgba(0, 0, 0, 0.7)",
        },
      }}>
        <IconButton sx={{ color: "#FFFFFF" }} onClick={handleMobile}>
          <MenuIcon />
        </IconButton>
      </Box>
      <Tooltip title="Back">
        <IconButton
          sx={{
            position: "absolute",
            top: "2rem",
            left: "2rem",
            bgcolor: "rgba(0,0,0,0.9)",
            color: "white",
            "&:hover": {
              bgcolor: "rgba(0,0,0,0.5)",
            },
          }}
          onClick={navigateBack}
        >
          <KeyboardBackspaceIcon />
        </IconButton>
      </Tooltip>
    </>
  );
  const GroupName = <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} spacing={"1rem"} padding={"1rem"} >
    {isEdit ? <>
      <TextField value={groupNameUpdatedValue} onChange={(e) => setGroupNameUpdatedValue(e.target.value)} />
      <IconButton onClick={updateGroupName} >
        <DoneIcon />
      </IconButton>

    </> : <>
      <Typography variant='h4'>{groupName} </Typography>
      <IconButton onClick={() => setIsEdit(true)} > <EditIcon /> </IconButton>
    </>}
  </Stack>
  const ButtonGroup = <Stack direction={{ sm: "row", xs: "column-reverse" }} spacing={"1rem"} p={{ sm: "1rem", xs: "0", md: "1rem 4rem" }} >
    <Button size='large' color='error' variant='outlined' startIcon={<DeleteIcon />} onClick={openConfirmDeleteHandler}>Delete Group</Button>
    <Button size='large' variant='contained' startIcon={<AddIcon />} onClick={openAddMemberHandler} >Add member</Button>

  </Stack>
  return (
    <Grid container height={"100vh"}>
      <Grid
        item
        sx={{
          display: { xs: "none", sm: "block" },
          backgroundColor: "#c5cae9",
        }}
        sm={4}
      >
        <GroupList myGroups={sampleChats} chatId={chatId} />
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          padding: "1rem 3rem",
        }}
      >
        {IconBtns}
        {GroupName && (
          <>
            {GroupName}
            <Typography margin={"2rem"} alignSelf={"flex-start"} variant='body1'>
              Members
            </Typography>
            <Stack maxWidth={"45rem"} width={"100%"} boxSizing={"border-box"} padding={{ sm: "1rem", xs: "0", md: "1rem 4 rem " }} spacing={"2rem"} bgcolor={"bisque"} height={"50vh"} overflow={"auto"} >
              {/* Members */}
            </Stack>
            {/* Button Group */}
            {ButtonGroup}
          </>
        )}
      </Grid>
      {
        isAddMember && (<Suspense fallback={<div>Loading...</div>}>
          <AddMemberDialog />
        </Suspense>)
      }
      {
        confirmDeleteDialog && (<Suspense fallback={<div>Loading...</div>}>
          <ConfirmDeleteDialog open={confirmDeleteDialog} handleClose={() => setConfirmDeleteDialog(false)} confirmDeleteHandler={confirmDeleteHandler} />
        </Suspense>)
      }
      <Drawer open={isMobileMenuOpen} onClose={handleMobileClose} sx={{
        display: { xs: "block", sm: "none" },
      }} >
        <GroupList myGroups={sampleChats} chatId={chatId} />
      </Drawer>
    </Grid>
  );
};

const GroupList = ({ w = "100%", myGroups = [], chatId }) => (
  <Stack>
    {myGroups.length > 0 ? (
      myGroups.map((group) => (
        <GroupListItem key={group._id} group={group} chatId={chatId} />
      ))
    ) : (
      <Typography textAlign={"center"} padding={"1rem"}>No groups</Typography>
    )}
  </Stack>
);

const GroupListItem = memo(({ group, chatId }) => {
  const { name, avatar, _id } = group;

  return (
    <Link to={`?group/${_id}`} onClick={(e) => { if (chatId === _id) e.preventDefault }}>
      <Stack direction="row" spacing={2} padding={"1rem"}>
        <AvatarCard avatar={avatar} />
        <Typography>{name}</Typography>
      </Stack>
    </Link>
  );
});

export default Groups;
