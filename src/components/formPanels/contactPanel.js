import React, { useEffect, useState } from 'react'
import './formPanels.scss'
import MyInput from '../myInput';
import MySelect from '../mySelect';
import {firmOrPrivate, posrednictwo} from '../../constants'
import { useSelector } from 'react-redux';
import ChoiceValue from '../choiceValue/choiceValue';

const ContactPanel = () => {

    const isPrivate = useSelector(state=>{
        return state.choices?.firmOrPrivate === 'private'
    })

    const isFirm = useSelector(state=>{
        return state.choices?.firmOrPrivate === 'firm'
    })

    return (
        <div className='form-panel'>
            <div className='title'>Kontakt</div>

            <div className='row'>
                <div className='row-input firmOrPrivate'>
                    <div className='input-title star'>Osoba prywatna / firma</div>     
                    <MySelect choice='firmOrPrivate' choiceValues={firmOrPrivate} isSingleValue={true} initSingleChoice='firm'/>               
                </div>
            </div>

            <div className='row'>
                <div className='row-input star'>
                    <div className='input-title star'>Nazwa</div>     
                    <MyInput title='nazwa' placeholder='Jan Kowalski'/>               
                </div>
                <div className='row-input'>
                    <div className='input-title'>E-mail</div>     
                    <MyInput title='email' errorTitle='Uzupełnij email, telefon lub link rekrutacyjny'
                        tooltipTitle={<>Podaj telefon, e-mail lub link rekrutacyjny <span className='req'>*</span></>}
                    />               
                </div>
                <div className='row-input'>
                    <div className='input-title'>Telefon</div>     
                    <MyInput title='phone' errorTitle='Uzupełnij email, telefon lub link rekrutacyjny'
                        tooltipTitle={<>Podaj telefon, e-mail lub link rekrutacyjny <span className='req'>*</span></>}
                    />               
                </div>
            </div>

            <div className='row'>
                <div className='row-input'>
                    <div className='input-title'>Link rekrutacyjny (aplikuj)</div>     
                    <MyInput title='firmAppLink' errorTitle='Uzupełnij email, telefon lub link rekrutacyjny'
                        tooltipTitle={<>Podaj telefon, e-mail lub link rekrutacyjny <span className='req'>*</span></>}
                    />               
                </div>
            </div>

            <div className='row'>
                <div className='row-input star'>
                    <div className={`input-title ${isPrivate? null: 'star'}`}>NIP</div>     
                    <MyInput title='nip' isNumber={isFirm}/>               
                </div>
                <div className='row-input'>
                    <div className='input-title'>Miasto</div>     
                    <MyInput title='contactMiasto' />               
                </div>
                <div className='row-input'>
                    <div className='input-title'>Ulica i nr</div>     
                    <MyInput title='contactAdress' />               
                </div>
            </div>

            <div className='row'>
                <div className='row-input alone-input'>
                    <ChoiceValue choice='posrednictwo' value={posrednictwo} key='posrednictwo' isInner={true}/>
                </div>
            </div>

        </div>
    )
}

export default ContactPanel
