import React from 'react'
import './styles.css'

const Tabs = ({ tabs, onClick }) => {
    return (
        <ul className='tabs'>
            {tabs && tabs.map(({ tabIndex, title, values, activate }) => (
                <li onClick={() => onClick(tabIndex)} key={tabIndex} className={activate && 'active'}>{title} <span>({values.length})</span></li>
            ))}
        </ul>
    )
}

export default Tabs