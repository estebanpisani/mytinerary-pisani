import React from 'react';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material/';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


export const Footer = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'space-around',
                flexDirection: 'column'
            }}
            className='footer-container'
        >
            <Box className='footer-info bg-secondary'
                sx={{
                    display: 'flex',
                    justifyContent: {xs:'center', sm:'space-around', md:'space-around'},
                    alignItems: 'center',
                    width:'100%',
                    flexWrap:'wrap'
                }}
            >
                <Box className='social-container 'sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',flexGrow:'1'
                }} >
                    <List dense={true} sx={{color:'#fff'}}>
                        <ListItemButton>
                            <ListItemIcon sx={{color:'#fff'}}>
                                <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><FacebookIcon /></a>
                                
                            </ListItemIcon>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon sx={{color:'#fff'}}>
                                <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><InstagramIcon /></a>
                            </ListItemIcon>
                        </ListItemButton>
                    </List>
                    <List dense={true}>
                        <ListItemButton>
                            <ListItemIcon sx={{color:'#fff'}}>
                                <a href="https://www.twitter.com" target="_blank" rel="noreferrer"><TwitterIcon /></a>
                            </ListItemIcon>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon sx={{color:'#fff'}}>
                                <a href="https://www.whatsapp.com/?lang=es" target="_blank" rel="noreferrer"><WhatsAppIcon /></a>
                            </ListItemIcon>
                        </ListItemButton>
                    </List>
                </Box>
                <Box className='footernav-container text-light'  sx={{flexGrow:'2', width:{xs:'30%'}, alignItems:{xs:'center', md:'center'}, justifyContent:'center', display:'flex', flexWrap:'wrap'}}>
                    <List dense={true}>
                        <ListItemButton >
                            <ListItemText
                                primary="HOME"
                            />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText
                                primary="CITIES"
                            />
                        </ListItemButton>
                    </List>
                </Box>
                <Box className='policies-container' sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap:'wrap',flexGrow:'0'
                    
                }} >
                    <List dense={true} className='text-light' sx={{textDecoration:'underline', textAlign:'center'}}>
                        <ListItem className='text-light' sx={{textAlign:'center', cursor:'pointer'}}>
                            <ListItemText
                                primary="Privacy Policy"
                            />
                        </ListItem>
                        <ListItem sx={{textAlign:'center', cursor:'pointer'}}>
                            <ListItemText
                                primary="Terms and Conditions"
                            />
                        </ListItem>
                        </List>
                        <List dense={true} className='text-light' sx={{textDecoration:'underline', textAlign:'center'}}>
                        <ListItem sx={{textAlign:'center', cursor:'pointer'}}>
                            <ListItemText
                                primary="Refund Policy"
                            />
                        </ListItem>
                        <ListItem sx={{textAlign:'center', cursor:'pointer'}}>
                            <ListItemText
                                primary="Cookies Policy"
                            />
                        </ListItem>
                    </List>
                </Box >
            </Box>
            <Box className='copyright-container' sx={{backgroundColor:'#000', color:'#fff', padding:'2px'}}>
                <Typography>&copy; All rights deserved Esteban Pisani | Mindhub Cohort 28</Typography>
            </Box>
        </Box>
    )
}
