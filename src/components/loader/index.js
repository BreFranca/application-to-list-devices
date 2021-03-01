import React from 'react'
import './styles.css'

const Loader = ({ children, loading }) => {
    return (
        <div className={`loader${loading ? ' loading' : ''}`}>
            <div className='spin-loader'></div>
            {children}
        </div>
    )
}

export default Loader