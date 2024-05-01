import * as React from 'react';
import { Container, Typography, TextField, Button, Link, Grid, Card, CardContent, FormControlLabel, Checkbox } from '@mui/material';
import googleLogo from './googleLogo.png'

import './Login.css'
import { green, red } from '@mui/material/colors';

const Login = () => {

    const googleSignin = () => {
        window.open("http://localhost:5000/auth/google", "_self");
    };    

    return(
            <div className='login-page'>
                <div className='form'>
                <h2 style={{textAlign:"center"}}>Login</h2>
                <Card className="card">
                    <CardContent>
                        <form className='login-form' onSubmit={''}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
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
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button className='submit-btn'
                                type="submit"
                                fullWidth
                                color="inherit"
                                style={{ marginTop: '1rem', backgroundColor: 'black', color: 'white'}}
                                // style={{ marginTop: '1rem', backgroundColor: 'hsl(122, 68%, 37%)'}}
                                >
                                Sign In
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item className='signUp-link' style={{ marginTop: '1rem' }}>
                                    <Link href="#" variant="body2">
                                    Don't have an account? Sign Up
                                    </Link>
                                </Grid>
                            </Grid>
                            <Button className='google-btn'
                                fullWidth
                                color="inherit"
                                style={{ marginTop: '1rem', border:'1px solid black', borderRadius:'5px'}}
                                startIcon={<img src={googleLogo} alt="Google Logo" className='google-icon' />}
                                onClick={googleSignin}
                            >
                                Sign In With Google
                            </Button>
                        </form>
                    </CardContent>
                </Card>
                </div>
        </div>
    )
}

export default Login;