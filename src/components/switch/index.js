import React from 'react'
import './styles.css'

const Switch = (props) => {
    const {
        active
    } = props
    return (
        <label className="switch">
            <input {...props} type="checkbox" defaultChecked={active && 'checked'} />
            <span className="slider" />
            <span className="label">{active ? 'Active' : 'Deactivate'}</span>
        </label>
    )
}

export default Switch