import React, { useEffect, useState } from 'react'
import './styles.css'
import { Card, Loader, Tabs, Search } from '../../components'
import moment from 'moment'
import { getPhones, updateStatus } from './api'
import { mountTabs } from './functions'
import { tabsDefault } from './consts'

const ListPage = () => {
    const [phones, setPhones] = useState([])
    const [tabs, setTabs] = useState(tabsDefault)
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState('')

    const fetchData = async () => {
        let phones = await getPhones()
        const tabsMounted = mountTabs({ tabs, values: phones })
        setTabs(tabsMounted)
        setPhones(phones)
    }

    useEffect(() => {
        setLoading(true)
        fetchData();
        setLoading(false)
        
    }, [setPhones])

    const handleChangeStatus = async (event, readingName, status) => {
        setLoading(true)
        await updateStatus(readingName, status)
        fetchData()
        setLoading(false)
    }

    const handleTab = (tab) => {
        const tabsUpdated = tabs.map(t => {
            t.activate = t.tabIndex === tab ? true : false
            return t
        })
        const tabActivate = tabsUpdated.find(t => t.activate)
        setTabs(tabsUpdated)
        setPhones(tabActivate.values)
        setSearch('')
    }

    const handleSearch = (event) => {
        const value = event.target.value
        setSearch(value)
        const tabActivate = tabs.find(({activate}) => activate)
        const phones = tabActivate.values.filter(({name}) => name.toLowerCase().includes(value.toLowerCase()))
        setPhones(phones)
    }

    return (
        <div className='layout'>
            <div className='instructions'>
                <h1>Desafio Frontend Camino</h1>
                <span>Sinta-se à vontade para implementar a UI da maneira que desejar.</span>
            </div>
            <Search
                onChange={handleSearch}
                placeholder='Search...'
                value={search}
            />
            <Tabs
                tabs={tabs}
                onClick={handleTab}
            />
            <Loader loading={loading}>
                <div className="cards">
                    {phones.map(({name, unit, timestamp, value, active}, index) => (
                        <Card
                            key={index}
                            name={name}
                            unit={unit}
                            date={moment(timestamp).format('DD.MM.YYYY hh:mm:ss')}
                            value={value}
                            active={active}
                            onChange={event => handleChangeStatus(event, name, !active)}
                        />
                    ))}
                </div>
            </Loader>
        </div>
    )
}

export default ListPage