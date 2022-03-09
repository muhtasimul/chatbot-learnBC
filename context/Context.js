import React, { useState } from 'react'
import axios from 'axios'
const Context = React.createContext()

function ContextProvider({ children }) {

    const [ask, setAsk] = useState('')
    const [data, updateData] = useState([])

    const solutionFind = (e) => {
        e.preventDefault()
        axios.post('/api/server', {
            string: ask
        }).then(
            res => {
                updateData(prev => [...prev, { question: ask, answers: res.data.answer }])
            }

        )
    }

    return (
        <Context.Provider value={{
            ask,
            setAsk,
            solutionFind,
            data

        }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }