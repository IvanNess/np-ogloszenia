export const updateChoices = (state, action)=>{
    if(state===undefined){
        return {}
    }
    switch(action.type){
        case 'ADD_CHOICE':
            console.log(state.choices[action.choice], action.choice)
            if(!state.choices[action.choice])
                return {
                    ...state.choices,
                    [action.choice] : [action.value]
                }
            return {
                ...state.choices,
                [action.choice] : [...state.choices[action.choice], action.value]
            }  
        case 'REMOVE_CHOICE':
            const idx  = state.choices[action.choice].findIndex(choice=>choice===action.value)
            return {
                ...state.choices,
                [action.choice] : [
                    ...state.choices[action.choice].slice(0, idx),
                    ...state.choices[action.choice].slice(idx+1)
                ]
            }  
        case 'REMOVE_ALL_VALUES':
            return {...state.choices, [action.choice]: []}
        case 'SINGLE_CHOICE':
            return {...state.choices, [action.choice]: action.value}
        default:
            return state.choices       
    }
}
