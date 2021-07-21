import { secondWindowChoicesNames } from "../constants"
import { cities } from "../cities"

export const addChoice = ({choice, value}) => (dispatch, getState)=> {
    dispatch({type: 'ADD_CHOICE', choice, value})

    if(secondWindowChoicesNames.includes(choice)){
        dispatch({type: 'ADD_CHOICE', choice: 'categoriesValues', value})
        dispatch({type: 'REMOVE_ERROR', value: 'categoriesValues'})
    }else{
        const {errors} = getState()
        if(errors.includes(choice)){
            dispatch({type: 'REMOVE_ERROR', value: choice})
        }    
    }
}

const removeValueFromChoices = ({choices, value, dispatch})=>{
    for (const key in choices) {
        if (choices.hasOwnProperty(key)) {
            if(key!=='categoriesValues' && choices[key].includes(value)){
                dispatch({type: 'REMOVE_CHOICE', choice: key, value})
            }
        }
    }
}

export const removeChoice = ({choice, value}) => (dispatch, getState)=> {
    dispatch({type: 'REMOVE_CHOICE', choice, value})
    if(secondWindowChoicesNames.includes(choice)){
        dispatch({type: 'REMOVE_CHOICE', choice: 'categoriesValues', value})
    }

    //delete from first page panel
    if(choice==='categoriesValues'){
        const {choices} = getState()
        removeValueFromChoices({choices, value, dispatch})
    }
}

export const removeAllValues = ({choice}) => (dispatch, getState)=> {
    if(choice==='categoriesValues'){
        const {choices} = getState()
        for (const value of choices.categoriesValues) {
            for (const key in choices) {
                key.toString()
                removeValueFromChoices({choices, value, dispatch})
            }
        }  
    }
    dispatch({type: 'REMOVE_ALL_VALUES', choice})
}

export const singleChoice = ({choice, value, language}) => (dispatch, getState)=> {
    const {errors} = getState()
    dispatch({type: 'SINGLE_CHOICE', choice, value})
    
    if(choice==='miasto'){
        return dispatch({type: 'SINGLE_CHOICE', choice: 'miastoInput', value: cities.find(city=>city.key===value)[language]
    })
    }
    if(['email', 'phone', 'firmAppLink'].includes(choice)){
        dispatch({type: 'REMOVE_ERROR', value: 'email'})
        dispatch({type: 'REMOVE_ERROR', value: 'phone'})
        return dispatch({type: 'REMOVE_ERROR', value: 'firmAppLink'})
    }
    if(errors.includes(choice)){
        dispatch({type: 'REMOVE_ERROR', value: choice})
    }
}

export const setRef = ({refName, value}) => (dispatch)=> dispatch({type: 'SET_REF', refName, value})

export const addError = ({value}) => (dispatch)=> dispatch({type: 'ADD_ERROR', value})

export const removeError = ({value}) => (dispatch)=> dispatch({type: 'REMOVE_ERROR', value})