import React from 'react'
import ListPage from './pages/ListPage'
import 'react-notifications-component/dist/theme.css'
import ReactNotification from 'react-notifications-component'
import './globals.css'

const App = () => {

    return (
        <>
            <ReactNotification />
            <ListPage />
        </>
    )
}

export default App
