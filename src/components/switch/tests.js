'use strict'

import Switch from './'
import React from 'react'

export default {
    'empty data': (
        <Switch />
    ),
    'activate': (
        <Switch active={true} />
    ),
    'deactivate': (
        <Switch active={false} />
    )
}
