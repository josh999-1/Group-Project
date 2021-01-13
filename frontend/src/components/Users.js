import axios from 'axios'
import React, {useEffect} from 'react'

const Users = () => {
    const [users, setUsers] = []

    const fetchData = async () => {
        const response = await axios.get('/api/users')
        console.log(response.data)

        setUsers(response.data.users)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            All Users

        </div>
    )
}

export default Users
