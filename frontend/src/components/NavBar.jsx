import React from 'react';
import { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

import { Link as LinkRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import userActions from '../redux/actions/userActions';

function NavBar() {
    // const logo = process.env.PUBLIC_URL + '/img/planeIcon.png';
    const dispatch = useDispatch();
    let navigate = useNavigate();
    //Nav controlls
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleLogOut = () => {
        dispatch(userActions.logout());
        navigate("/", { replace: true });
    }

    const pages = [{ name: 'HOME', url: '/' }, { name: 'CITIES', url: '/cities' }];
    // const loggedSettings = [{ name: 'Logout', url: '/logout' }];
    
    // User Data
    let userData = useSelector(store => store.userReducer.userData);

    return (
        <AppBar position="static" sx={{ backgroundColor: 'rgb(0, 105, 92, 1)' }}>
            <Container maxWidth="xl" >
                <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}  >
                    {/* Burger Menu */}
                    <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' }
                            }}
                        >
                            {pages.map((page, index) => (
                                <LinkRouter key={index} to={page.url}>
                                    <MenuItem onClick={handleCloseNavMenu} >
                                        <Typography sx={{ fontFamily: 'Comfortaa' }} textAlign="center" >{page.name}</Typography>
                                    </MenuItem>
                                </LinkRouter>
                            ))
                            }
                        </Menu>
                    </Box>
                    {/* Nav Menu */}
                    <Box sx={{ display: { xs: 'none', sm: 'flex'} }}>
                        {pages.map((page, index) => (
                            <LinkRouter to={page.url} key={index}>
                                <MenuItem sx={{
                                    color: 'white'
                                }} >
                                    <Typography className='font-normal' textAlign="center" >{page.name}</Typography>
                                </MenuItem>
                            </LinkRouter>
                        ))}
                    </Box>
                    {/* Center title (md resolution) */}
                    <Box sx={{
                        display: { xs: 'none', sm: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none'
                    }}>
                        <LinkRouter to="/" >
                            <Typography
                                variant="h4"
                                noWrap
                                className='font-slogan'
                                sx={{ padding: '1rem' }}
                            >
                                MyTinerary
                            </Typography>
                        </LinkRouter>
                    </Box>
                    {/* User session Menu */}
                    {userData ? (
                        <Box sx={{ display: 'flex', alignItems: 'center' }} >
                            <Typography variant="h6"
                                noWrap
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'sans-serif',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                                className='font-slogan'> {`${userData.firstName} ${userData.lastName}`}
                            </Typography>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    {userData.userPhoto ?
                                        (<Avatar src={userData.userPhoto} />)
                                        :
                                        (<Avatar src="/broken-image.jpg" />)
                                    }
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >

                                <MenuItem onClick={handleCloseUserMenu}>
                                    <LogoutIcon></LogoutIcon>
                                    <Typography textAlign="center" onClick={handleLogOut}>Logout</Typography>
                                </MenuItem>
                            </Menu>
                        </Box>
                    ) : (
                        <>
                            {/* Session Burger Menu */}
                            <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, color: '#fff' }}>
                                        <AccountBoxIcon />
                                        <MenuIcon />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >

                                    <LinkRouter to="/login">
                                        <MenuItem onClick={handleCloseUserMenu} >
                                            <LoginIcon />
                                            <Typography textAlign="center">Login</Typography>
                                        </ MenuItem>
                                    </LinkRouter>
                                    <LinkRouter to="/signup">
                                        <MenuItem onClick={handleCloseUserMenu}>
                                            <AccountCircleIcon />
                                            <Typography textAlign="center">Sign Up</Typography>
                                        </MenuItem>
                                    </LinkRouter>
                                </Menu>
                            </Box>
                            {/* Session Nav */}
                            < Box sx={{ display: { xs: 'none', sm: 'flex' }, flexDirection: 'space-between' }} >
                                <LinkRouter to="/login">
                                    <MenuItem >
                                        <LoginIcon />
                                        <Typography textAlign="center">Login</Typography>
                                    </ MenuItem>
                                </LinkRouter>
                                <LinkRouter to="/signup">
                                    <MenuItem >
                                        <AccountCircleIcon />
                                        <Typography textAlign="center">Sign Up</Typography>
                                    </MenuItem>
                                </LinkRouter>
                            </ Box >
                        </>
                    )
                    }
                </Toolbar >
            </Container >
        </AppBar >
    );
};
export default NavBar;
