 import React, { useState } from 'react'
import { Form, TreeSelect } from 'antd'
import { TreeNode } from 'antd/lib/tree-select'
import './main.scss'
import MySelect from '../mySelect'
import FormPanels from '../formPanels'
import Ogloszenia from '../ogloszenia/ogloszenia'

const Main = () => {

    console.log('document', document.location)

    return (
        <div className='main'>
            {/* <FormPanels/> */}
            {document.location.pathname.includes('/dodaj-ogloszenie') && <FormPanels/>}
            {document.location.pathname.includes('/ogloszenia') && <Ogloszenia/>}
        </div>
    )
}

export default Main
