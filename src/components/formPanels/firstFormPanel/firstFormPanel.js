import React, { useEffect, useState } from 'react'
import '../formPanels.scss'
import MySelect from '../../mySelect'
import {rodzajArr, poziomStanowiska, wymiarPracy, charakterPracy} from '../../../constants'
import MyInput from '../../myInput'
import SecondWindow from '../../secondWindow'
import { useSelector, useDispatch } from 'react-redux'
import { singleChoice } from '../../../redux/actions'

const FirstFormPanel = () => {

    const choices = useSelector(state=>state.choices)
    const dispatch = useDispatch()

    console.log("choices", choices)

    // console.log('categories', categories)


    return (
        <div className='form-panel'>
            <div className='title'>Informacje podstawowe</div>

            <div className='row'>
                <div className='row-input twoFlex'>
                    <div className='input-title star'>Stanowisko</div>     
                    <MyInput title='stanowisko'/>               
                </div>
                <div className='row-input'>
                    <div className='input-title star'>Wymiar pracy</div>     
                    <SecondWindow max={3}/>               
                </div>
            </div>

            <div className='row'>
                <div className='row-input'>
                    <div className='input-title star'>Rodzaj umowy</div>     
                    <MySelect choice='rodzaj' choiceValues={rodzajArr} title='Wyberz'/>               
                </div>
                <div className='row-input'>
                    <div className='input-title star'>Poziom stanowiska</div>     
                    <MySelect choice='poziomStanowiska' choiceValues={poziomStanowiska} title='Wyberz' max={2}/>               
                </div>
                <div className='row-input'>
                    <div className='input-title star'>Wymiar pracy</div>     
                    <MySelect choice='uroda' choiceValues={wymiarPracy} title='Wyberz'/>               
                </div>
            </div>

            <div className='row'>
                <div className='row-input'>
                    <div className='input-title star'>Charakter pracy</div>     
                    <MySelect choice='charakterPracy' choiceValues={charakterPracy} title='Wyberz'/>               
                </div>
                <div className='row-input'>
                    <div className='input-title'>Zarobki (brutto / m-c)</div>  
                    <div className='cols'>
                        <MyInput title='zarobkimin' after='zł' isNumber={true}/>               
                        <MyInput title='zarobkimax' after='zł' isNumber={true}/> 
                    </div>   
              
                </div>
                <div className='row-input'>
                    <div className='input-title'>Nr referencyjny</div>     
                    <MyInput title='nrreferencyjny'/>               
                </div>
            </div>

        </div>
    )
}

export default FirstFormPanel
