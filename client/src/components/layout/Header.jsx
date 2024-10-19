import { AppBar, Backdrop, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import React, { Suspense, useState, lazy } from 'react'
import { orange } from '../../../constants/color'
import { Add as AddIcon, Logout as LogoutIcon, Menu as MenuIcon, Search as SearchIcon, Notifications as NotificationsIcon, Search } from "@mui/icons-material"
const SearchDialog = lazy(() => import('../../../specific/SearchDialog'));
const NotificationsDialog = lazy(() => import('../../../specific/NotificationsDialog'));
const NewGroupDialog = lazy(() => import('../../../specific/NewGroupDialog'));




const Header = () => {
  const handleMobile = () => {
    setIsMobile(!ismobile)
  }
  const openSearchDialog = () => {
    setIsSearch(prev => !prev)
  }
  const openNewGroup = () => {
    setIsNewGroup(prev => !prev)
  }
  const openNotification = () => {
    setIsNotification(prev => !prev)
  }
  const logoutHandler = () => {
    console.log("Logout Handler")
  }
  const [ismobile, setIsMobile] = useState(false)
  const [isSearch, setIsSearch] = useState(false)
  const [isNewGroup, setIsNewGroup] = useState(false)
  const [isNotification, setIsNotification] = useState(false)


  return <>

    <Box sx={{ flexGrow: 1 }} height={"4rem"}>
      <AppBar position='static' sx={{ bgcolor: orange }} >
        <Toolbar>
          <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }} >Chat App</Typography>
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <IconButton color="inherit" onClick={handleMobile} >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 1 }} ></Box>
          <Box>
            <Tooltip title="Search" >
              <IconButton size="large" color="inherit" onClick={openSearchDialog} >
                <SearchIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="New Group" >
              <IconButton color='inherit' size='large' onClick={openNewGroup} >
                <AddIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Notifications" >
              <IconButton color='inherit' size='large' onClick={openNotification} >
                <NotificationsIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Log Out" >
              <IconButton color='inherit' size='large' onClick={logoutHandler} >
                <LogoutIcon />
              </IconButton>
            </Tooltip>

          </Box>
        </Toolbar>
      </AppBar>
    </Box>
    {
      isSearch && (
        <Suspense fallback={<Backdrop open />}>
          <SearchDialog />
        </Suspense>
      )
    }
    {
      isNotification && (
        <Suspense fallback={<Backdrop open />}>
          <NotificationsDialog />
        </Suspense>
      )
    }
    {
      isNewGroup && (
        <Suspense fallback={<Backdrop open />}>
          <NewGroupDialog />
        </Suspense>
      )
    }


  </>
}

export default Header