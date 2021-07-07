import React from 'react'
import './myInput.scss'
import { useSelector, useDispatch } from 'react-redux'
import { singleChoice } from '../../redux/actions'

const MyInput = ({title, after=false, isNumber}) => {

    const value = useSelector(state=>state.choices[title])

    const dispatch = useDispatch()

    const onChange = (e)=>{
        if(isNumber && !Number(e.target.value) && e.target.value !== ''){
            return
        }
        dispatch(singleChoice({choice: title, value: e.target.value}))
    }

    return (
        <div className={`myInput`}>
            <input value={value} onChange={onChange} className={`${after && 'after'}`}/>
            {after && <div className='afterValue'>
                {after}
            </div>}
        </div>
    )
}

export default MyInput
