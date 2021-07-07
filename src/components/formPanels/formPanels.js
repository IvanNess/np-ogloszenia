import React from 'react'
import MySelect from '../mySelect'
import './formPanels.scss'
import FirstFormPanel from './firstFormPanel'

const FormPanels = () => {
    return (
        <div className="form-panels">
            <FirstFormPanel/>
            <MySelect choice='sport' choiceValues={[1, 2, 3, 4, 5]} isInner={true} title='Sport'/>
            <MySelect choice='uroda' choiceValues={[1, 7, 8, 9, 2]} title='Uroda'/>
            <MySelect choice='kadry' choiceValues={[1, 7, 8, 9, 2]} isSingleValue={true} title='Kadry'/>
        </div>
    )
}

export default FormPanels
