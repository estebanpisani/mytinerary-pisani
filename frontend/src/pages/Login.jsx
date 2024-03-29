import React from 'react';
import { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
// import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Alert from '@mui/material/Alert';

import { Link as LinkRouter } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import userActions from '../redux/actions/userActions';

import CLIENT_ID from '../google';

const bgImg = process.env.PUBLIC_URL + '/img/city-body.jpg'

export default function Login() {
    
    const dispatch = useDispatch();
    let navigate = useNavigate();

    // Show/Hide Password
    const [values, setValues] = useState({
        password: '',
        showPassword: false,
    });
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    // Login Form
    async function handleSubmit(event) {
        event.preventDefault();
        const userCredentials = {
            email: event.target[0].value.trim(),
            password: event.target[2].value,
            method: 'register-form'
        }
        dispatch(userActions.login(userCredentials));
        setOpen(true);
    };

    // Google Login
    async function handleCredentialResponse(response) {
        let responseData = jwt_decode(response.credential)
        const userData = {
            email: responseData.email,
            password: responseData.sub,
            method: 'google'
        };
        dispatch(userActions.login(userData));
        setOpen(true);
    }

    useEffect(() => {
        if (window.google) {
            window.google.accounts.id.initialize({
                client_id: CLIENT_ID,
                callback: handleCredentialResponse
            });
            window.google.accounts.id.renderButton(
                document.getElementById("buttonDiv"),
                { theme: "outline", size: "medium", locale: "en-IN" }
            );
        }
        // eslint-disable-next-line
    }, []);

    //SnackBar
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(true);
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
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

    let errors = useSelector(store => store.userReducer.errors);
    let message = useSelector(store => store.userReducer.message);

    if (message !== '') {
        setTimeout(function () {
            navigate("/", { replace: true });
        }, 2000);
    }

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
                        Sign in
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }} >
                        <FormControl fullWidth required>
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <OutlinedInput
                                id="email"
                                label="Email"
                                type='email'
                                autoComplete='email'
                                required
                            />
                        </FormControl>
                        <FormControl sx={{ width: '100%', my: 2 }} variant="outlined" required>
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                required
                                autoComplete='current-password'
                                id="outlined-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                        {/* <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        /> */}
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
                            Sign In
                        </Button>
                        <Typography > Or </Typography>

                        <Box sx={{ margin: '1rem', display: 'flex', justifyContent: 'center' }}>
                            <div id="buttonDiv"></div>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                        <Typography component="p" variant="subtitle2" >
                            Don't have an account?
                        </Typography>
                        <LinkRouter to="/signup" >
                            <button className='cta-btn-5 font-title'>
                                <p>Sign Up!</p>
                            </button>
                        </LinkRouter>
                    </Box>
                </Box>
            </Box>

            {errors.length > 0 &&
                <Snackbar
                    open={open}
                    autoHideDuration={3000}
                    onClose={handleClose}
                    message="Error"
                    action={action}
                >
                    <Alert onClose={handleClose} variant="filled" severity="error">{errors.map((error, i) => (
                        <p key={i}>{error}</p>
                    )
                    )}</Alert>
                </Snackbar>
            }
            {message &&
                <Snackbar
                    open={open}
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