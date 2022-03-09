import React, { useState } from 'react'
import axios from 'axios'
const Context = React.createContext()

function ContextProvider({ children }) {

    const [ask, setAsk] = useState('')
    const [data, updateData] = useState([])
    let randomKey = Math.random() * 100
    const solutionFind = (e) => {
        e.preventDefault()
        axios.post('/api/server', {
            string: ask
        }).then(
            res => {
                updateData(prev => [...prev, { key: randomKey, question: ask, answers: res.data.answer }])
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