import React, { useState } from 'react'
import './formPanels.scss'
import FirstFormPanel from './firstFormPanel'
import EditorFormPanel from './editorFormPanel'
import ImageFormPanel from './imageFormPanel'
import FirmInfoPanel from './firmInfoPanel'
import LocalizationPanel from './localizationPanel'
import ContactPanel from './contactPanel'
import PeriodPanel from './periodPanel'
import LoginPanel from './loginPanel'
import ChoiceValue from '../choiceValue/choiceValue'
import { selectZgode, selectRegulamin, secondWindowChoicesNames, apiUrl } from '../../constants'
import { useSelector, useDispatch } from 'react-redux'
import { addError } from '../../redux/actions'
import axios from 'axios'
import { cities } from '../../cities'
import { Spin } from 'antd'

const FormPanels = () => {

    const choices = useSelector(state=>state.choices)
    const dispatch = useDispatch()
    const language = useSelector(state=>state.language)
    const [btnDisabled, setBtnDisabled] = useState(false)

    const onClick= async ()=>{
        setBtnDisabled(true)
        let hasError = false
        const reqChoices = [
            'selectZgode', 'selectRegulamin',
            'password', 'login', 'period', 'nip', 'emailPhoneLink', 'nazwa', 'firmOrPrivate', 'miastoInput', 'klauzula', 'text',
            'charakterPracy', 'wymiarPracy', 'rodzaj', 'poziomStanowiska', 'categoriesValues', 'stanowisko'
        ]
        const miasto = cities.find(city=>city[language].toLowerCase()===choices.miastoInput?.trim().toLowerCase())

        for (const reqChoice of reqChoices) {
            if(reqChoice==='emailPhoneLink'){
                if((choices.email?.length > 0 && choices.email?.includes('@')) || choices.phone?.length > 8 || choices.firmAppLink?.length > 0){
                } else{
                    hasError = true
                    dispatch(addError({value: 'email'}))
                    dispatch(addError({value: 'phone'}))
                    dispatch(addError({value: 'firmAppLink'}))
                    const $err = document.querySelector(`.email`)
                    $err.parentElement.scrollIntoView()
                }
                continue
            }
            if(reqChoice==='miastoInput'){
                if(choices.miastoInput?.trim().length !== 0){
                    if(!miasto) {
                        hasError = true
                        dispatch(addError({value: 'miastoInput'}))
                        const $err = document.querySelector(`.miastoInput`)
                        $err.parentElement.scrollIntoView()
                    }
                } else{
                    continue
                }
            }
            if(!choices[reqChoice]?.length > 0){
                hasError = true
                dispatch(addError({value: reqChoice}))
                const $err = document.querySelector(`.${reqChoice}`)
                $err.parentElement.scrollIntoView()
            }
        }
        if(hasError){
            setBtnDisabled(false)
        }else{

            const updChoices = Object.assign({}, choices)
            for (const name of secondWindowChoicesNames) {
                delete updChoices[name]
            }
            delete updChoices.login
            delete updChoices.password
            delete updChoices.selectZgode
            delete updChoices.selectRegulamin
            delete updChoices.miastoInput
            updChoices.miasto = miasto.key

            try {
                const res = await axios({ 
                    url: `${apiUrl}/createvacancy`,
                    method: "POST",
                    data: {
                        username: "ivan.ness",
                        vacancy: updChoices
                    },
                    withCredentials: true
                })
                console.log('res', res.data)
                window.location.pathname = '/ogloszenia'
            } catch (error) {
                console.log('err', error)
                // console.log('ERROR', error.response.data)
            }
        }

    }

    return (
        <Spin spinning={btnDisabled}>
            <div className="form-panels">
                <FirstFormPanel/>
                <ImageFormPanel title={`naglowek`}/>
                <EditorFormPanel/>
                <FirmInfoPanel/>
                {/* <MediaPanel/> */}
                <LocalizationPanel/>
                <ContactPanel/>
                <PeriodPanel/>
                <LoginPanel/>

                {/* <div className='row'>
                    <div className='row-input alone-input'>
                        <ChoiceValue choice='selectAll' value={selectAll} key='selectAll' isInner={true}/>
                    </div>
                </div> */}

                <div className='row'>
                    <div className='row-input alone-input'>
                        <ChoiceValue choice='selectZgode' value={selectZgode} key='selectZgode' isInner={true}/>
                    </div>
                </div>

                <div className='row'>
                    <div className='row-input alone-input'>
                        <ChoiceValue choice='selectRegulamin' value={selectRegulamin} key='selectRegulamin' isInner={true}/>
                    </div>
                </div>

                <div className='row'>
                    <div className='row-input add-btn-row'>
                        <a href='/polityka-prywatnosci' target='_blank'><p>Polityka prywatności</p></a>           
                        <button onClick={onClick} disabled={btnDisabled}>Dodaj ogłoszenie</button>
                    </div>
                </div>

            </div>

        </Spin>
    )
}

export default FormPanels
