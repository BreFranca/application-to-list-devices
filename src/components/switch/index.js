import React, { useEffect, useState } from 'react'
import './styles.css'

const Switch = ({ onChange, active }) => {
    const [checked, setChecked] = useState(false)
    useEffect(() => {
        setChecked(active)
        console.log(active)
    }, [active])
    return (
        <label className={`switch${checked ? ' switch-active' : ''}`}>
            {console.log(checked)}
            <input onChange={onChange} type="checkbox" />
            <span className="slider" />
            <span className="label">{active ? 'Active' : 'Deactivate'}</span>
        </label>
    )
}

export default Switch