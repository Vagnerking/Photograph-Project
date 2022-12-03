import React from "react";
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function Navbar() {

    return (
        <AppBar position="static" sx={{ height: '65px', display: 'flex', justifyContent: 'center' }}>
            <Toolbar>
                <PhotoCamera sx={{ mr: 2 }} />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 300, p: 0 }}>
                    Fotograph Company
                </Typography>
                <WbSunnyIcon sx={{ color: 'common.white', cursor: 'pointer' }} />
            </Toolbar>
        </AppBar>
    )
}