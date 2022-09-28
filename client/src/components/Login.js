import { useState } from "react";
import { Link, useHistory } from 'react-router-dom'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function Login({setUserData}) {

    const [ formData, setFormData ] = useState({})

    const [errors, setErrors] = useState([])
    const history = useHistory()

  

    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
        .then((res) => {
          if (res.ok) {
            res.json().then((user) => {
              setUserData(user)
              history.push(`/home`)
            });
          } else {
            res.json().then(json => setErrors(json.error))
          }
        });
      };

      const theme = createTheme();

    return(
      <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random/?fitness)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleChange}
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
                onChange={handleChange}
              />
 
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container spacing={2}>
                <Grid item>
                <Link to={'/signup'}>Register</Link>
                </Grid>
                <Grid item>
                <Link to={'/'}>Back to Main</Link>
                </Grid>
              </Grid>
            </Box>
            <Stack sx={{ width: '100%' }} spacing={2}>
                {errors? <Alert severity="warning"> {errors} </Alert> :null}
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
    )
}

export default Login 
