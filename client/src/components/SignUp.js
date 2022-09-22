import { Link } from 'react-router-dom'
import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

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

    return(
        <div>
            <Link to={'/login'}>Sign In</Link>
            <Link to={'/'}>Back to Main</Link>
            <div>
                <form onSubmit={ handleSubmit }>
                    <section>
                        <h1>
                            Register
                        </h1>
                    </section>
                    <input type="text" name='name' placeholder='Name' value={name} onChange={handleChange} />
                    <input type="text" name='email' placeholder='Email' value={email} onChange={handleChange} />
                    <input type="password" name='password' placeholder='Password' value={password} onChange={handleChange} />
                    <button type='submit'>Register</button>
                    {errors? errors.map(error => <div> {error[1]} </div>) :null}
                </form>
            </div>
        </div>
    )
}

export default Signup