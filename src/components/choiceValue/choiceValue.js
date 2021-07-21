import React, { useState, useEffect } from 'react'
import './choiceValue.scss'
import { useSelector, useDispatch } from 'react-redux'
import { removeChoice, addChoice, singleChoice, removeError } from '../../redux/actions'
import CheckBoxIcon from '@material-ui/icons/CheckBox'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank'
import { Modal } from 'antd'
import { secondWindowChoicesNames } from '../../constants'


const ChoiceValue = ({choice, value, isInner, isSingleValue=false, max, search}) => {

    const choices = useSelector(state=>state.choices)
    const errors = useSelector(state=>state.errors)
    const language = useSelector(state=>state.language)
    const dispatch = useDispatch()
    const [checked, setChecked] = useState(isSingleValue? choices[choice]===value : choices[choice]?.includes(value))
    const [isError, setIsError] = useState(false)

    const click = ()=>{
        if(isSingleValue){ 
            console.log('singleValue', choice)           
            // dispatch(singleChoice({choice, value: ''}))
            return dispatch(singleChoice({choice, value: value.key, language}))

            return setTimeout(()=>{
                dispatch(singleChoice({choice, value: value.key, language}))
                // dispatch(removeError({value: choice}))
            }, 0)
        }

        if(secondWindowChoicesNames.includes(choice) && !choices.categoriesValues?.includes(value.key)
            && max && choices.categoriesValues?.length >= max
        ){
            return Modal.warning({
                title: 'Uwaga',
                content: `Możesz zaznaczyć maksymalnie ${max} opcje`,
            });
        }

        if(choices[choice] && !choices[choice].includes(value.key) && max && choices[choice].length >= max){
            return Modal.warning({
                title: 'Uwaga',
                content: `Możesz zaznaczyć maksymalnie ${max} opcje`,
            });
        }

        if(choices[choice] && choices[choice].includes(value.key)){
            dispatch(removeChoice({choice, value: value.key}))
        } else{
            dispatch(addChoice({choice, value: value.key}))
        }

    }

   useEffect(()=>{
    //    console.log('choiceValue useeffect', choices[choice], choice, value.key, choices[choice]?.includes(value.key))
       setChecked(isSingleValue? choices[choice]===value.key : choices[choice]?.includes(value.key))
   }, [choice, choices, value])

   useEffect(()=>{
       if(errors.includes(choice)){
           setIsError(true)
       } else{
           setIsError(false)
       }
   }, [errors])

    return (
        <>
            {(!search || (value[language].toLowerCase().includes(search.toLowerCase().trim()) 
                && value[language].toLowerCase()!==search.toLowerCase().trim())) && 
            <div 
                className={`choiceValue ${checked && 'checked'} ${isInner && 'inner'} ${isError && 'error'} ${choice}`} 
                onClick={click}
            >
                {!isSingleValue && (checked ? <CheckBoxIcon/>: <CheckBoxOutlineBlankIcon style={{color: '#ccc'}}/>)}
                {value[language]}
            </div>}
        </>
    )
}

export default ChoiceValue
