import UserDetails from "../components/UserDetails/UserDetails";
import { useEffect, useState } from 'react'

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = () => {
            fetch('/users').then(res => res.json()).then(data => setUsers(data))
        }
        fetchUsers();
    }, [])
    console.log(users);

    return (
        <div className='users'>
            {users.map(u => <UserDetails user={u} />)}
        </div>
    )
}

export default Users;