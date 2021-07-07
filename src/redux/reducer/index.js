import {updateChoices} from './updateChoices'

const reducer = (state, action)=>{
    return{
        choices: updateChoices(state, action)
    }
}

export default reducer