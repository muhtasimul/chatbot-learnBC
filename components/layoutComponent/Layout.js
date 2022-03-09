import React from 'react'
import NavComponent from './NavComponent'
import classes from "./Layout.module.css"

export default function Layout({ children }) {
    return (
        <>
            <div
                className={`${classes.details} container-fluid p-0 m-0`}
            >
                <NavComponent />
                {children}
                <footer className='d-flex justify-content-center align-items-center'>
                    <sub>Learn About BC</sub>
                </footer>
            </div>
        </>

    )
}
