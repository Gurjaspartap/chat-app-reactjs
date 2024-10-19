import React from 'react'
import { Grid, Skeleton } from '@mui/material'

export const LayoutLoader = () => {
  return (
    <Grid container sx={{ height: 'calc(100vh - 4rem)' }}>
      {/* First Grid item - hidden on xs, visible on sm and above */}
      <Grid item sm={4} md={3} sx={{ display: { xs: 'none', sm: 'block' }, height: '100%', bgcolor: 'primary.main' }}>
        Recent Chats
        <Skeleton variant="rectangular" height={100} />

      </Grid>

      {/* Second Grid item - full width on xs, reduces on larger screens */}
      <Grid item xs={12} md={8} lg={6} sx={{ height: '100%' }}>
        chat
        <Skeleton variant="rectangular" height={100} />

      </Grid>

      {/* Third Grid item - hidden on xs, visible on md and above */}
      <Grid item md={4} lg={3} sx={{ display: { xs: 'none', md: 'block' }, height: '100%', padding: '2rem', bgcolor: 'rgba(0,0,0,0.85)' }}>
        sideProfile Bar
        <Skeleton variant="rectangular" height={100} />

      </Grid>

    </Grid>

  )
}

