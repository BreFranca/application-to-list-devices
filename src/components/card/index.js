import React from 'react'
import Switch from '../switch'
import './styles.css'

const Card = ({ name, unit, date, value, active, onChange }) => (
    <div className="card">
        <h3 className="card-name">{name}</h3>
        <ul className="card-infos">
            <li><strong>unit:</strong> {unit}</li>
            <li><strong>date:</strong> {date}</li>
            <li><strong>value:</strong> {value}</li>
        </ul>
        <Switch
            onChange={onChange}
            active={active}
            value={active ? 'checked' : ''}
        />
    </div>
)

export default Card