import React from 'react';
import { useState, useEffect } from 'react';
import { Link as LinkRouter } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import jwt_decode from 'jwt-decode';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Alert from '@mui/material/Alert';

import userActions from '../redux/actions/userActions';

const bgImg = process.env.PUBLIC_URL + '/img/city-body.jpg'

export default function SignUp() {

    const dispatch = useDispatch();

    //    Country Select
    let countries = ["Argentina", "Colombia", "Chile", "Uruguay", "Australia", "Japan"]
    const [country, setCountry] = useState('undefined');

    const handleChange = (e) => {
        setCountry(e.target.value);
        setForm(true);
    }

    //SnackBar
    const [alert, setAlert] = useState(false);
    const handleClick = () => {
        setAlert(true);
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setAlert(false);
    };
    const action = (
        <>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </>
    );

    const [form, setForm] = useState(false);

    // Sign Up Form
    async function handleSubmit(event) {
        event.preventDefault();

        const userData = {
            firstName: event.target[2].value.trim(),
            lastName: event.target[4].value.trim(),
            country: country,
            userPhoto: event.target[6].value.trim(),
            email: event.target[8].value.trim(),
            password: event.target[10].value,
            passwordRepeat: event.target[12].value,
            method: 'register-form',
            verified: false
        };

        dispatch(userActions.signUp(userData));

    };

    // Google Sign Up
    function handleCredentialResponse(response) {

        let responseData = jwt_decode(response.credential)
        console.log(responseData);

        const userData = {
            firstName: responseData.given_name,
            lastName: responseData.family_name,
            userPhoto: responseData.picture,
            email: responseData.email,
            password: responseData.sub,
            passwordRepeat: responseData.sub,
            country: country,
            method: 'google',
            verified: responseData.email_verified
        };

        dispatch(userActions.signUp(userData))
        setAlert(true);
    }
    useEffect(() => {
        window.google.accounts.id.initialize({
            client_id: "141406914670-3blfenl651dr6mbqqo0bknpfbu8vsm17.apps.googleusercontent.com",
            callback: handleCredentialResponse
        });
        window.google.accounts.id.renderButton(
            document.getElementById("buttonDiv"),
            { theme: "outline", size: "medium", text: 'signup_with', locale: "en-IN" }  // customization attributes
        );
    });

    let errors = useSelector(store => store.userReducer.errors);
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
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                        {!form && (
                            <Typography sx={{ mb: '1rem' }}>Before start registration, enter your country, please</Typography>
                        )}
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
                        {form && (<>
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
                                onClick={handleClick}
                            >
                                Sign Up
                            </Button>

                            <Typography > Or </Typography>
                            <Box sx={{ margin: '1rem', display: 'flex', justifyContent: 'center' }}>
                                <div id="buttonDiv"></div>
                            </Box>
                        </>
                        )}
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
            {errors.length > 0 &&
                <Snackbar
                    open={alert}
                    autoHideDuration={5000}
                    onClose={handleClose}
                    message="Error"
                    action={action}
                >
                    <Alert onClose={handleClose} severity="error">{errors.map((message, i) => (
                        <p key={i}>{message}</p>
                    )
                    )}</Alert>
                </Snackbar>
            }
            {message &&
                <Snackbar
                    open={alert}
                    autoHideDuration={3000}
                    onClose={handleClose}
                    message="Welcome"
                    action={action}
                >
                    <Alert onClose={handleClose} severity="success">{message}</Alert>
                </Snackbar>
            }
        </Box>
    );
}