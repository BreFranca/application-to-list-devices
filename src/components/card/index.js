import React from 'react'
import Switch from '../switch'
import './styles.css'

const Card = ({ name, unit, date, value, active, onChange }) => (
    <div className="card">
        <h3 className="card-name">{name}</h3>
        <ul className="card-infos">
            <li className="card-unit"><strong>unit:</strong> {unit}</li>
            <li className="card-date"><strong>date:</strong> {date}</li>
            <li className="card-value"><strong>value:</strong> {value}</li>
        </ul>
        <Switch
            onChange={onChange}
            active={active}
        />
    </div>
)

export default Card