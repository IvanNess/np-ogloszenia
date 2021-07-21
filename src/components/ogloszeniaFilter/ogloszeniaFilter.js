import React, { useState } from 'react'
import './ogloszeniaFilter.scss'
import MyInput from '../myInput'
import SecondWindow from '../secondWindow'
import MySelect from '../mySelect'
import { wymiarPracy, rodzajArr, poziomStanowiska, charakterPracy, dodaneWOkresie, firmOrPrivate, 
    forYoung, student, bezPosrednikow, niepelnosprawnosc, zagranica, sanksiazeczka, rekrutacjaOnline, secondWindowChoicesNames,
} from '../../constants'
import ChoiceValue from '../choiceValue/choiceValue'
import { useSelector } from 'react-redux'
import { cities } from '../../cities'
import MySelectWithSearchedInput from '../mySelect/mySelectWithSearchInput'
const queryString = require('query-string')

const OgloszeniaFilter = () => {

    const [isMoreOpen, setIsMoreOpen] = useState(false)
    const choices = useSelector(state=>state.choices)
    const language = useSelector(state=>state.language)

    const submit = e=>{
        e.preventDefault()
        console.log('submit', e)
        const miasto = cities.find(city=>city[language].toLowerCase()===choices.miastoInput?.trim().toLowerCase())
        
        const updChoices = Object.assign({}, choices)
        if(miasto) {
            updChoices.miasto=miasto.key
        } 
        for (const name of secondWindowChoicesNames) {
            delete updChoices[name]
        }
        delete updChoices.miastoInput
        delete updChoices.klauzula
        delete updChoices.period
        delete updChoices.firmOrPrivate
        const stringified = queryString.stringify(updChoices)
        console.log('stringified', stringified) 
        window.location.search = stringified
    }

    const moreClicked = ()=>{
        setIsMoreOpen(isMoreOpen=>!isMoreOpen)
    }

    return (
        <div className={`ogloszeniaFilter`}>
            <form onSubmit={submit}>
                <div className={`row`}>
                    <div className='row-input threeFlex'>
                        <MyInput title='fraza' placeholder='Wpisz szukaną frazę'/> 
                    </div>
                    <div className='row-input'>
                        {/* <MyInput title='miasto' placeholder='Miasto'/> */}
                        <MySelectWithSearchedInput choice='miasto' choiceValues={cities} isSingleValue={true} placeholder='Miasto'/> 
                    </div>
                    <div className='row-input'>
                        <input type="submit" onSubmit={submit} value={`WYSZUKAJ`}/>
                    </div>
                </div>
                <div className={`row`}>
                    <div className='row-input'>
                        <div className='input-title'>Branża / kategoria</div>    
                        <SecondWindow />
                    </div>
                    <div className='row-input'>
                        <div className='input-title'>Wymiar pracy</div>    
                        <MySelect choice='wymiarPracy' choiceValues={wymiarPracy} title='Wyberz'/>
                    </div>
                    <div className='row-input'>
                        <div className='input-title'>Wynagrodzenie brutto (od)</div>    
                        <MyInput title='zarobkimin'/>
                    </div>
                    <div className={`row-input more`} >
                        <div className='input-title' onClick={moreClicked}>{isMoreOpen? 'mniej opcij': 'więcej opcji'}</div>    
                    </div>
                </div> 

                <div className={`moreDiv ${isMoreOpen? 'open': 'closed'}`}>
                    <div className={`top row`}>
                        <div className='row-input'>
                            <div className='input-title'>Rodzaj umowy</div>    
                            <MySelect choice='rodzaj' choiceValues={rodzajArr} title='Wyberz'/>
                            <div className='input-title'>Dodane przez</div>    
                            <MySelect choice='filterFirmOrPrivate' choiceValues={firmOrPrivate} title='Wyberz'/>                            
                            <div className='input-title'>Poziom stanowiska</div>    
                            <MySelect choice='poziomStanowiska' choiceValues={poziomStanowiska} title='Wyberz'/>
                            <div className='input-title'>Dodane w okresie</div>    
                            <MySelect choice='dodaneWOkresie' choiceValues={dodaneWOkresie} title='Wyberz'/>                            
                            <div className='input-title'>Charakter pracy</div>    
                            <MySelect choice='charakterPracy' choiceValues={charakterPracy} title='Wyberz'/>
                        </div>
                        <div className='row-input left'>
                            <div className='input-title right'>Dodatkowe informacje</div>    
                            <ChoiceValue choice='forYoung' value={forYoung} key='forYoung'/>
                            {/* <ChoiceValue choice='premium' value={premium} key='premium'/> */}
                            <ChoiceValue choice='bezPosrednikow' value={bezPosrednikow} key='bezPosrednikow'/>
                            <ChoiceValue choice='student' value={student} key='student'/>
                            <ChoiceValue choice='niepelnosprawnosc' value={niepelnosprawnosc} key='niepelnosprawnosc'/>
                            <ChoiceValue choice='zagranica' value={zagranica} key='zagranica'/>
                            <ChoiceValue choice='sanksiazeczka' value={sanksiazeczka} key='sanksiazeczka'/>
                            <ChoiceValue choice='rekrutacjaOnline' value={rekrutacjaOnline} key='rekrutacjaOnline'/>
                        </div>
                    </div>
                    <div className={`bottom row`}>
                        <div className='row-input threeFlex'>
                            <div className='clearFilters' onClick={moreClicked}><p>wyczyść filtry</p></div>    
                        </div>
                        <div className='row-input'>
                            <input type="button" onClick={submit} value={`Pokaż oferty`}/>
                        </div>
                    </div>

                </div>
            </form>
            
        </div>
    )
}

export default OgloszeniaFilter
