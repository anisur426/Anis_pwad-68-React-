import React from 'react'
import { name } from './Person';


function Users() {
    const users = [
        { id: 1, name: "rahim", email: "rahim@gamil.com" },
        { id: 2, name: "karim", email: "karim@gamil.com" },
        { id: 3, name: "anis", email: "anis@gamil.com" }
    ];
    return (
        <>

            <h1>Users</h1>
            <ul>
                {
                    users.map(user => {
                        return (<li kye={user.id}>{user.id},{user.name},{user.email}</li>)
                    })
                }
            </ul>

        </>
    )
}

export default Users