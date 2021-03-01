import React, { useEffect, useState } from 'react'
import './styles.css'

const Switch = ({ onChange, active }) => (
    <label className={`switch${active ? ' switch-active' : ''}`}>
        <input onChange={onChange} type="checkbox" />
        <span className="slider" />
        <span className="label">{active ? 'Active' : 'Deactivate'}</span>
    </label>
)

export default Switch