import { Box } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ShowerIcon from '@mui/icons-material/Shower';

const MaterialUI = () => {
  return (
    <Box>
        <Stack direction={'row'}>
            <Box sx={{p: 1}}>
                <HomeIcon sx={{fontSize: 'large'}}/>
            </Box>
            <Box sx={{p: 1}}>
                <ShowerIcon sx={{fontSize: 'large'}}/>
            </Box>
        </Stack>
    </Box>
  )
}

export default MaterialUI