import React from 'react';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link as LinkRouter } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import userActions from '../redux/actions/userActions';

const bgImg = process.env.PUBLIC_URL + '/img/city-body.jpg'

export default function SignInSide() {

    const dispatch = useDispatch();

    async function handleSubmit(event) {
        event.preventDefault();

        const userCredentials = {
            email: event.target[0].value,
            password: event.target[2].value,
            method: 'register-form'
        }

        let response = await dispatch(userActions.login(userCredentials));
        console.log(response);
    };


    let message = useSelector(store => store.userReducer.message);
    console.log(message);



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
                                required
                            />
                        </FormControl>
                        <FormControl sx={{ width: '100%', my: 2 }} variant="outlined" required>
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                required
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
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
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
                            Sign In
                        </Button>
                        <Typography > Or </Typography>

                        <button className="login-with-google-btn" >
                            Sign in with Google
                        </button>
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
        </Box>
    );
}