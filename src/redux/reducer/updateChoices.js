export const updateChoices = (state, action)=>{
    if(state===undefined){
        return {
            klauzula: 'Wyrażam zgodę na przetwarzanie moich danych osobowych w celu rekrutacji zgodnie z art. 6 ust. 1 lit. a Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych).',
            firmOrPrivate: 'firm',
            period: 'day14'
        }
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
            console.log('state', state, action.choice)
            const idx  = state.choices[action.choice].findIndex(choice=>{
                if(typeof choice === 'object'){
                    return choice.key===action.value
                }
                return choice===action.value
            })
            if(idx===-1){
                return state.choices
            }
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
