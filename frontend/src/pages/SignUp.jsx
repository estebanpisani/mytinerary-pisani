import React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link as LinkRouter } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import userActions from '../redux/actions/userActions';

const bgImg = process.env.PUBLIC_URL + '/img/city-body.jpg'

export default function SignInSide() {
    const dispatch = useDispatch();
    const [country, setCountry] = useState('');
    let countries = ["Argentina", "Colombia", "Chile", "Uruguay", "Australia", "Japan"]

    const handleChange = (event) => {
        setCountry(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let password1 = event.target[10].value;
        let password2 = event.target[12].value;

        if (password1 === password2) {
            const userData = {
                firstName: event.target[0].value,
                lastName: event.target[2].value,
                country: event.target[4].value,
                userPhoto: event.target[6].value,
                email: event.target[8].value,
                password: password1,
                method: 'register-form',
                verified: true
            }
            dispatch(userActions.signUp(userData));
            console.log(message);
        }else{
            console.log('Las contraseñas no coinciden.');
        }

    };

    let message = useSelector(store => store.userReducer.message);

    return (

        <Box container component="main" sx={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundImage: `url(${bgImg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center', padding: '1.5rem'
        }}>
            <Box className='text-primary font-normal' sx={{ backgroundColor: 'rgba(255, 255, 255, 0.92)', width: { xs: '70%', sm: '50%', md: '35%' }, borderRadius: '10px' }} >
                <Box
                    sx={{
                        py: 2,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <Typography component="h2" variant="h4" sx={{ fontFamily: 'Charm', mb: 2 }} >
                        Sign Up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="firstname"
                            label="First Name"
                            name="firstname"
                            autoComplete="name"
                            color='primary'
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="lastname"
                            label="Last Name"
                            name="lastname"
                            autoComplete="name"
                            color='primary'
                            autoFocus
                        />
                        <FormControl sx={{ width: '100%' }}>
                            <InputLabel id="country-select-helper-label" required>Country</InputLabel>
                            <Select
                                labelId="country-select-helper-label"
                                id="country-select"
                                value={country}
                                label="🌍 Country"
                                onChange={handleChange}

                            >
                                {countries.map((country, i) =>
                                    <MenuItem value={country} key={i}>{country}</MenuItem>
                                )}
                            </Select>
                        </FormControl>
                        <TextField
                            margin="normal"
                            fullWidth
                            id="photoUrl"
                            label="📷 Photo URL"
                            name="photoUrl"
                            autoComplete="name"
                            color='primary'
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="📧 Email Address"
                            name="email"
                            autoComplete="email"
                            color='primary'
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="🔑 Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            color='primary'
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password2"
                            label="🔑 Confirm Password"
                            type="password"
                            id="password2"
                            color='primary'
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color='primary'
                            sx={{ mt: 3, mb: 2 }}
                            className='font-normal'
                            onSubmit={handleSubmit}
                        >
                            Sign Up
                        </Button>
                        <Typography > Or </Typography>

                        <button className="login-with-google-btn" >
                            Sign up with Google
                        </button>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                        <Typography component="p" variant="subtitle2" >
                            Already registered?
                        </Typography>
                        <LinkRouter to="/login" >
                            <button className='cta-btn-5 font-title'>
                                <p>Sign In!</p>
                            </button>
                        </LinkRouter>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}