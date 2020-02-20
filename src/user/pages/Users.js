import React from 'react'
import UsersList from '../components/UsersList'

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Denys Korn',
            image: 'http://masters.donntu.org/2010/igg/kornienkod/kornienko_big.jpg',
            places: 3
        },
    ]

    return <UsersList items={USERS}/>
}

export default Users