export const updateErrors = (state, action)=>{
    if(state===undefined){
        return []
    }
    console.log('action ', action.value)
    switch(action.type){
        case 'ADD_ERROR':
            if(state.errors.includes(action.value))
                return state.errors
            return [...state.errors, action.value]
        case 'REMOVE_ERROR':
            const idx  = state.errors.findIndex(error=>{
                return error===action.value
            })
            if(idx===-1){
                return state.errors
            }
            return [
                ...state.errors.slice(0, idx),
                ...state.errors.slice(idx+1)
            ]
        default:
            return state.errors
    }
}
