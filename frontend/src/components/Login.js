import React, {useState} from 'react'
import axios from 'axios'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [backendResponse, setBackendResponse] = useState("")

    const formHandler = async (event) => {
        event.preventDefault()
        console.log(email)
        console.log(password)

        const body = {
            userEmail: email,
            userPassword: password
        }
        const config = {
            headers: {
            'Content-Type': 'application/json'
            }
        }

        const response = await axios.post('/login', body, config)
        setBackendResponse(response.data.message)
        console.log(response)
    }

    return (
        
        <div>
            <h1>Login User:</h1>
            
            <form onSubmit={formHandler}>
                <label>Email: </label>
                <input type="email" name="userEmail" onChange={(e) => setEmail(e.target.value)} /> <br/>

                <label>Password</label>
                <input type="password" name="userPassword" onChange={(e) => setPassword(e.target.value)} /> <br/>
                
                <button type="submit">Register</button>
            </form>

            {backendResponse}
        </div>
    )
}

export default Login
