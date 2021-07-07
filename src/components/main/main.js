 import React, { useState } from 'react'
import { Form, TreeSelect } from 'antd'
import { TreeNode } from 'antd/lib/tree-select'
import './main.scss'
import MySelect from '../mySelect'
import FormPanels from '../formPanels'

const Main = () => {

    return (
        <div className='main'>
            <FormPanels/>
        </div>
    )
}

export default Main
