import React, { useEffect, useState } from 'react'

import List from '../List/List'
import User, { Users } from '../User/User'

import './styles.scss'

const useFetch = (url: string) => {
    const [data, setData] = useState<Users>([])
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        (async () => {
            const response = await fetch(url)
            const json: Users = await response.json()
            setData(json)
            setLoading(false)
        })()
    }, [url])

    return { data, loading }
}

export default function App() {
    const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/users')
    return (
        <div className="app">
            {loading ? (
                <div className="loading"><span className="spinner"/>Loading users...</div>
            ) : (
                <List items={data} renderer={User}/>
            )}
        </div>
    )
}
