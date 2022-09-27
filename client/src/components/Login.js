import { useState } from "react";
import { Link, useHistory } from 'react-router-dom'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function Login({handleUser}) {

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
              handleUser(user)
              history.push(`/home`)
            });
          } else {
            res.json().then(json => setErrors(json.error))
          }
        });
      };

    return(
        <div>
            <Link to={'/signup'}>Register</Link>
            <Link to={'/'}>Back to Main</Link>
            <div>
                <form onSubmit={handleSubmit} >
                    <section>
                        <h1>
                            Log In
                        </h1>
                    </section>
                    <input type="text" name='email' placeholder='Email' onChange={handleChange} />
                    <input type="password" name='password' placeholder='Password' onChange={handleChange}/>
                    <button type='submit'>Log In</button>
                </form>
                  <Stack sx={{ width: '100%' }} spacing={2}>
                    {errors? <Alert severity="warning"> {errors} </Alert> :null}
                  </Stack>
            </div>
        </div>
    )
}

export default Login