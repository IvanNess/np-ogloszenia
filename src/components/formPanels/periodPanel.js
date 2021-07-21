import React, { useEffect, useState } from 'react'
import { DateTime } from "luxon";
import './formPanels.scss'
import MySelect from '../mySelect';

let periodValues = []
const curDate = DateTime.now().setZone('Europe/Warsaw').setLocale('pl')
for (let index = 1; index <= 30; index++) {
    periodValues.push({
        key: `day${index}`,
        pl: `${curDate.plus({days: index}).toFormat('dd MMMM')} (${index} ${index===1? 'dzień': 'dni'})`,
        ua: `${index} dni`
    })
}

const PeriodPanel = () => {

    return (
        <div className='form-panel'>
            <div className='title'>Ważność ogłoszenia</div>

            <div className='row'>
                <div className='row-input period'>
                    <div className='input-title star'>Ogłoszenie ważne do</div>     
                    <MySelect choice='period' choiceValues={periodValues} isSingleValue={true} initSingleChoice='day14'/>               
                </div>
            </div>

        </div>
    )
}

export default PeriodPanel
