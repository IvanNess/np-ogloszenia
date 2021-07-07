import React, { useState, useEffect } from 'react'
import './choiceValue.scss'
import { useSelector, useDispatch } from 'react-redux'
import { removeChoice, addChoice, singleChoice } from '../../redux/actions'
import CheckBoxIcon from '@material-ui/icons/CheckBox'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank'
import { Modal } from 'antd'


const ChoiceValue = ({choice, value, isInner, isSingleValue, max, search}) => {

    const choices = useSelector(state=>state.choices)
    const dispatch = useDispatch()
    const [checked, setChecked] = useState(isSingleValue? choices[choice]===value : choices[choice]?.includes(value))

    const click = ()=>{
        if(isSingleValue){            
            dispatch(singleChoice({choice, value: ''}))
            return setTimeout(()=>{
                dispatch(singleChoice({choice, value}))
            }, 0)
        }

        const choicesArr = ['administracja', 'budownictwo', 'callcenter', 'finanse', 
            'edukacja', 'grafika', 'hotelarstwo', 'itadministracja', 
            'itprogramowanie', 'inżynieria', 'kadry', 'lancuchDostaw', 'marketing', 
            'media', 'medycyna', 'nieruchomosci', 'fizyczna', 'offshore', 
            'produkcja', 'prawo', 'sztuka', 'sprzedaz', 'transport', 
            'zdrowie', 'agencjePracy', 'analizaStatystyka', 'kontrolaYakosci', 'naprawa', 'ubezpieczenia']  
            
        

        if(choices[choice] && !choices[choice].includes(value) && max && choices[choice].length >= max){
            return Modal.warning({
                title: 'Uwaga',
                content: `Możesz zaznaczyć maksymalnie ${max} opcje`,
            });
        }

        if(choices[choice] && choices[choice].includes(value)){
            dispatch(removeChoice({choice, value}))
            if(choicesArr.includes(choice)){
                dispatch(removeChoice({choice: 'categories', value}))
            }
        } else{
            if(choicesArr.includes(choice) && choices.categories && choices.categories.length >= max){
                return Modal.warning({
                    title: 'Uwaga',
                    content: `Możesz zaznaczyć maksymalnie ${max} kategorie`,
                });
            }
            if(choicesArr.includes(choice)){
                dispatch(addChoice({choice: 'categories', value}))
            }
            dispatch(addChoice({choice, value}))
        }

    }

   useEffect(()=>{
       setChecked(isSingleValue? choices[choice]===value : choices[choice]?.includes(value))
   }, [choice, choices, value])

    return (
        <>
            {(!search || value.toLowerCase().includes(search.toLowerCase().trim())) && <div className={`choiceValue ${checked && 'checked'} ${isInner && 'inner'}`} onClick={click}>
                {!isSingleValue && (checked ? <CheckBoxIcon/>: <CheckBoxOutlineBlankIcon style={{color: '#ccc'}}/>)}
                {value}
            </div>}
        </>
    )
}

export default ChoiceValue
