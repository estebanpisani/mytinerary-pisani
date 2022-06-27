import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const bgImg = process.env.PUBLIC_URL + '/img/city-body.jpg'

export default function SignInSide() {
    const [country, setCountry] = React.useState('');
    let countries = ["Argentina", "Colombia", "Chile", "Uruguay", "Australia", "Japan"]

    const handleChange = (event) => {
        setCountry(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
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
                                label="Country"
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
                            label="Photo URL"
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
                            label="Email Address"
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
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            color='primary'
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color='primary'
                            sx={{ mt: 3, mb: 2 }}
                            className='font-normal'
                        >
                            Sign Up
                        </Button>
                        <Typography > Or </Typography>

                        <button class="login-with-google-btn" >
                            Sign up with Google
                        </button>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                        <Typography component="p" variant="subtitle2" >
                            Already registered?
                        </Typography>
                        <Link href="/login" >
                            <button className='cta-btn-5 font-title'>
                                <p>Sign In!</p>
                            </button>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}