import React, { useEffect, useState } from 'react'
import './formPanels.scss'
import MyInput from '../myInput';
import MySelect from '../mySelect';
import { cities } from '../../cities';
import MySelectWithSearchInput from '../mySelect/mySelectWithSearchInput';

const LocalizationPanel = () => {

    return (
        <div className='form-panel localization'>
            <div className='title'>Lokalizacja</div>

            <div className='row'>
                <div className='row-input'>
                    <div className='input-title'>Miasto</div>     
                    <MySelectWithSearchInput choice='miasto' choiceValues={cities} isSingleValue={true}/> 
                </div>
                <div className='row-input'>
                    <div className='input-title'>Ulica i nr</div>     
                    <MyInput title='adress' />               
                </div>
            </div>

        </div>
    )
}

export default LocalizationPanel
