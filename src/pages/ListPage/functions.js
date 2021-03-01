'use-strict'

export const mountTabs = ({ tabs, values }) => {
    tabs.map((tab) => {
        tab.values = tab.tabIndex !== 'all' ? values.filter((value) => value.status === tab.tabIndex) : values
        return tab
    })
    return tabs
}