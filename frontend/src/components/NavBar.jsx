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

import { Link as LinkRouter } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import userActions from '../redux/actions/userActions';

function NavBar() {
    const logo = process.env.PUBLIC_URL + '/img/planeIcon.png';
    const dispatch = useDispatch();
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
    }

    const pages = [{ name: 'Home', url: '/' }, { name: 'Cities', url: '/cities' }];
    // const loggedSettings = [{ name: 'Logout', url: '/logout' }];
    const guestSettings = [{ name: 'Login', url: '/login' }, { name: 'Sign Up', url: '/signup' }];

    // User Data

    let userData = useSelector(store => store.userReducer.userData);

    return (
        <AppBar position="static" sx={{ backgroundColor: 'rgb(0, 105, 92, 1)' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* Burger Menu */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                    <LinkRouter to="/">
                        <img className='logo' src={logo} alt="" sx={{ display: { xs: 'none', md: 'flex' } }} />
                    </LinkRouter>
                    {/* Center title (md resolution) */}

                    <Box sx={{
                        mr: 2,
                        display: { xs: 'none', sm: 'flex', md: 'none' },
                        flexGrow: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}>
                        <LinkRouter to="/" >
                            <Typography
                                variant="h5"
                                noWrap
                                className='font-slogan'
                            >
                                MyTinerary
                            </Typography>
                        </LinkRouter>
                    </Box>

                    {/* Nav Menu */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page, index) => (
                            <LinkRouter to={page.url} key={index}>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        my: 2,
                                        color: 'white',
                                        display: 'block',
                                        fontFamily: 'Comfortaa'
                                    }}
                                >
                                    <Typography className='font-normal' textAlign="center" >{page.name}</Typography>
                                </Button>
                            </LinkRouter>
                        ))}
                    </Box>
                    {/* md Title (flex-end) */}
                    {userData.firstName ?

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

                        :
                        <LinkRouter to="/">
                            <Typography
                                variant="h6"
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
                                className='font-slogan'
                            >
                                MyTinerary
                            </Typography>
                        </LinkRouter>
                    }
                    {/* User session Menu */}
                    <Box sx={{ flexGrow: 0 }}>
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
                            {userData.id ? (

                                <MenuItem onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center" onClick={handleLogOut}>Logout</Typography>
                                </MenuItem>

                            ) : (
                                guestSettings.map((setting, index) => (
                            <LinkRouter key={index} to={setting.url}>
                                <MenuItem onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting.name}</Typography>
                                </MenuItem>
                            </LinkRouter>)
                            )
                                )
                                }
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default NavBar;
