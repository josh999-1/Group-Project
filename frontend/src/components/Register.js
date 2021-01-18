import React, {useRef,useState} from 'react'
import axios from 'axios';
import './register.css';

const Register = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [backendResponse, setBackendResponse] = useState("")

    const formHandler = async (event) => {
        event.preventDefault()
        console.log(name)
        console.log(email)
        console.log(password)

        const body = {
            userName: name,
            userEmail: email,
            userPassword: password
        }

        const config = {
            headers: {
            'Content-Type': 'application/json'
            }
        }

        const response = await axios.post('/register', body, config)
        setBackendResponse(response.data.message)
        console.log(response)
    }

    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);
    const onSubmit = (onSubmitProps) => {
     onSubmitProps.resetForm()
    }
    return (
        <div>
            <button onClick={onClick} className="menu-trigger">
                Register User
            </button>
            

            <form onSubmit={formHandler}ref={dropdownRef} className={`menu ${isActive ? "active" : "inactive"}`}    >


                <label>User Name: </label>
                <input type="text" name="userName" onChange={(e) => setName(e.target.value)} /> <br />

                <label>Email: </label>
                <input type="email" name="userEmail" onChange={(e) => setEmail(e.target.value)} /> <br />

                <label>Password</label>
                <input type="password" name="userPassword" onChange={(e) => setPassword(e.target.value)} /> <br />

                <button   type="submit" >Register</button>
            
             

            </form>

            {backendResponse}
        </div>
    )
}

export default Register






