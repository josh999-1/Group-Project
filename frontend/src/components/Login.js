import React, {useRef,useState} from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import './registerLogin.css'

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
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);

    const history = useHistory();
    const handleClick = () => history.push('/select');

    
    return (
         
        <div>
            <button onClick={onClick}  className="menu-trigger">
                Login User
            </button>
            


            <form  onSubmit={formHandler}ref={dropdownRef} className={`menu ${isActive ? "active" : "inactive"}`}  >
                <label>Email: </label>
                <input type="email" name="userEmail" onChange={(e) => setEmail(e.target.value)} /> <br />

                <label>Password</label> 
                <input type="password" name="userPassword" onChange={(e) => setPassword(e.target.value)} /> <br />

                <button onClick={handleClick} type="submit">login</button>
            </form>

            {backendResponse}
        </div>
    )
}

export default Login
