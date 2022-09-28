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

function Signup() {

    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState([])
    const history = useHistory()
    
    const { name, email, password } = formData

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const user = {
            name,
            email,
            password
        }
    

    fetch(`/users`,{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(user)
        })
        .then(res => {console.log(res)
            if(res.ok){
                res.json().then(user => {
                console.log(user)
                history.push(`/login`)
                })
            }else {
                res.json().then(json => setErrors(Object.entries(json.error)))
            }
    })

    }
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
              backgroundImage: 'url(https://source.unsplash.com/random)',
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
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                  autoFocus
                  value={name}
                  onChange={handleChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={email}
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
                  value={password}
                  onChange={handleChange}
                />
   
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Register
                </Button>
                <Grid container spacing={2}>
                  <Grid item>
                  <Link to={'/login'}>Sign In</Link>
                  </Grid>
                  <Grid item>
                  <Link to={'/'}>Back to Main</Link>
                  </Grid>
                </Grid>
              </Box>
              <Stack sx={{ width: '100%' }} spacing={2}>
                  {errors? errors.map(error => <Alert severity="warning"> {error[1]} </Alert>) :null}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    )
}

export default Signup 


// <div>
        //     <Link to={'/login'}>Sign In</Link>
        //     <Link to={'/'}>Back to Main</Link>
        //     <div>
        //         <form onSubmit={ handleSubmit }>
        //             <section>
        //                 <h1>
        //                     Register
        //                 </h1>
        //             </section>
        //             <input type="text" name='name' placeholder='Name' value={name} onChange={handleChange} />
        //             <input type="text" name='email' placeholder='Email' value={email} onChange={handleChange} />
        //             <input type="password" name='password' placeholder='Password' value={password} onChange={handleChange} />
        //             <button type='submit'>Register</button>
        //             {errors? errors.map(error => <div> {error[1]} </div>) :null}
        //         </form>
        //     </div>
        // </div>