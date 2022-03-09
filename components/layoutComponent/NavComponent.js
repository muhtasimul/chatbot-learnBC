import React from 'react'
import classes from "../layoutComponent/NavComponent.module.css"

export default function NavComponent() {

    return (
        <nav className={`${classes.details} navbar navbar-expand-lg`}>
            <div className='container-fluid'>
                <h1 className='navbar-brand'>Learn About British Columbia</h1>
            </div>
        </nav>
    )
}
