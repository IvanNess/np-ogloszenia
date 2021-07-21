import {updateChoices} from './updateChoices'
import { updateRefs } from './updateRefs'
import { updateErrors } from './updateErrors'

const reducer = (state, action)=>{
    return{
        choices: updateChoices(state, action),
        refs: updateRefs(state, action),
        errors: updateErrors(state, action),
        language: 'pl'
    }
}

export default reducer