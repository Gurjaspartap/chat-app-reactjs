import { Close as CloseIcon, Groups as GroupsIcon, ManageAccounts as ManageAccountsIcon, Menu as MenuIcon, Message as MessageIcon, Dashboard as DashboardIcon, ExitToApp as ExitToAppIcon } from '@mui/icons-material'
import { Box, Drawer, Grid, IconButton, Stack, styled, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useLocation, Link as LinkComponent, Navigate } from 'react-router-dom'

const Link = styled(LinkComponent)`
  text-decoration: none;
  color: black;
  padding: 1rem 2rem;  
  &:hover {
    color:rgba(0,0,0,0.5) 
  }
    `

const adminTabs = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: <DashboardIcon />,
  },
  {
    name: "Users",
    path: "/admin/user-management",
    icon: <ManageAccountsIcon />,
  },
  {
    name: "Chats",
    path: "/admin/chats-management",
    icon: <GroupsIcon />,
  },
  {
    name: "Messages",
    path: "/admin/message-management",
    icon: <MessageIcon />,
  },
];

const isAdmin = true;
const AdminLayout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false)
  if (!isAdmin) return <Navigate to="/admin" />

  const SideBar = ({ w = "100%" }) => {
    const location = useLocation();
    const LogoutHandler = () => {
      console.log("Logout Handler")
    }
    return <Stack width={w} direction={"column"} p={"3rem"} spacing={"3rem"} >
      <Typography variant='h5' textTransform={"uppercase"} > Admin</Typography>
      <Stack spacing={"1rem"} >
        {
          adminTabs.map((tab) => (
            <Link key={tab.path} to={tab.path} sx={
              location.pathname === tab.path && {
                bgcolor: "black",
                color: "white",
                ":hover": { color: "white" },
              }
            }  >
              <Stack direction={"row"} spacing={"1rem"} alignItems={"center"} >
                {tab.icon}
                <Typography>{tab.name}</Typography>
              </Stack>
            </Link>
          ))
        }
        <Link onClick={LogoutHandler}>
          <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
            <ExitToAppIcon />

            <Typography>Logout</Typography>
          </Stack>
        </Link>
      </Stack>
    </Stack >
  }
  const handleMobile = () => {
    setIsMobile(!isMobile)
  }
  const handleClose = () => { setIsMobile(false) }
  return (
    <Grid container minHeight={'100vh'} >
      <Box sx={{
        display: { xs: "block", md: "none" },
        position: "fixed", right: "1rem", top: "1rem"
      }}>
        <IconButton onClick={handleMobile}>
          {isMobile ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Box>
      <Grid item md={4} lg={3} sx={{ display: { xs: 'none', md: 'block' } }} >
        <SideBar />
      </Grid>
      <Grid item xs={12} md={8} lg={9} sx={{ bgcolor: "#f5f5f5" }}  >
        {children}
      </Grid>
      <Drawer open={isMobile} onClose={handleClose}>
        <SideBar w="50vw" />
      </Drawer>
    </Grid >
  );
}

export default AdminLayout