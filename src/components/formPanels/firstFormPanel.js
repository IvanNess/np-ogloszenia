import React, { useEffect, useState } from 'react'
import './formPanels.scss'
import MySelect from '../mySelect'
import {rodzajArr, poziomStanowiska, wymiarPracy, charakterPracy, forYoung, student, niepelnosprawnosc, zagranica, sanksiazeczka, rekrutacjaOnline,

} from '../../constants'
import MyInput from '../myInput'
import SecondWindow from '../secondWindow'
import { useSelector, useDispatch } from 'react-redux'
import ChoiceValue from '../choiceValue/choiceValue'

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
                    <MyInput title='stanowisko' isRequired={true}/>               
                </div>
                <div className='row-input'>
                    <div className='input-title star'>Branża / kategoria</div>     
                    <SecondWindow max={3} isRequired={true}/>               
                </div>
            </div>

            <div className='row'>
                <div className='row-input'>
                    <div className='input-title star'>Rodzaj umowy</div>     
                    <MySelect choice='rodzaj' choiceValues={rodzajArr} title='Wyberz' isRequired={true}/>               
                </div>
                <div className='row-input'>
                    <div className='input-title star'>Poziom stanowiska</div>     
                    <MySelect choice='poziomStanowiska' choiceValues={poziomStanowiska} title='Wyberz' max={2} isRequired={true}/>               
                </div>
                <div className='row-input'>
                    <div className='input-title star'>Wymiar pracy</div>     
                    <MySelect choice='wymiarPracy' choiceValues={wymiarPracy} title='Wyberz' isRequired={true}/>               
                </div>
            </div>

            <div className='row'>
                <div className='row-input'>
                    <div className='input-title star'>Charakter pracy</div>     
                    <MySelect choice='charakterPracy' choiceValues={charakterPracy} title='Wyberz' isRequired={true}/>               
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

            <div className='row'>
                <div className='row-input alone-input'>
                    <div className='input-title'>Dodatkowe informacje:</div>     
                    <ChoiceValue choice='forYoung' value={forYoung} key='forYoung' isInner={true}/>
                    <ChoiceValue choice='student' value={student} key='student' isInner={true}/>
                    <ChoiceValue choice='niepelnosprawnosc' value={niepelnosprawnosc} key='niepelnosprawnosc' isInner={true}/>
                    <ChoiceValue choice='zagranica' value={zagranica} key='zagranica' isInner={true}/>
                    <ChoiceValue choice='sanksiazeczka' value={sanksiazeczka} key='sanksiazeczka' isInner={true}/>
                    <ChoiceValue choice='rekrutacjaOnline' value={rekrutacjaOnline} key='rekrutacjaOnline' isInner={true}/>
                </div>
            </div>

            <div className='row'>
                <div className='row-input'>
                    <div className='input-title'>Słowa kluczowe</div>     
                        <MyInput 
                            title='slowaKluczowe' 
                            tooltipPlacement="topRight"
                            tooltipTitle={<><p>Dodaj słowa kluczowe. Aż do 60% większej skuteczności.</p><p>Słowa kluczowe oddzielaj przecinkiem.</p></>}
                        />               
                </div>
            </div>

        </div>
    )
}

export default FirstFormPanel
