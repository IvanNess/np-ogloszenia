export const updateRefs = (state, action)=>{
    if(state===undefined){
        return {}
    }
    console.log('action ', action.refName, action.value)
    switch(action.type){
        case 'SET_REF':
            return {...state.refs, [action.refName]: action.value}
        default:
            return state.refs       
    }
}
