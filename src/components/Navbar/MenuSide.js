import React from 'react'
import {Stack} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const MenuSide = ({setOpenSidebar}) => {
  return (
    <Stack flexBasis='100%' alignItems='end' display={{xs: 'flex', md: 'none'}}>
        <MenuIcon onClick={() => setOpenSidebar(true)} style={{fontSize: '35px', cursor: 'pointer'}} />
    </Stack>
  )
}

export default MenuSide