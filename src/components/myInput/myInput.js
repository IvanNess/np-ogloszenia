import React, { useRef, useEffect, useState } from 'react'
import './myInput.scss'
import { useSelector, useDispatch } from 'react-redux'
import { singleChoice } from '../../redux/actions'
import { Tooltip } from 'antd'
import MyError from '../myError'

const MyInput = ({title, after=false, isNumber, tooltipTitle, tooltipPlacement="topRight", isTextArea=false, placeholder, 
    isRequired=false, errorTitle
}) => {

    const value = useSelector(state=>state.choices[title] || '')

    const dispatch = useDispatch()

    const errors = useSelector(state=>state.errors)
    const [isError, setIsError] = useState(false)

    useEffect(()=>{
        if(errors.includes(title)){
            setIsError(true)
        } else{
            setIsError(false)
        }
    }, [errors, title])

    const onChange = (e)=>{
        console.log('on change', e.target.value)
        if(isNumber && !Number(e.target.value) && e.target.value !== ''){
            console.log('return')
            return
        }
        dispatch(singleChoice({choice: title, value: e.target.value}))
        // dispatch(removeError({value: title}))
    }

    const ref= useRef()

    // useEffect(()=>{
    //     if(isRequired)
    //         dispatch(setRef({refName: title, value: ref.current}))
    // }, [])

    return (
        <div className={`myInput ${title}`} ref={ref}>
                <Tooltip placement={tooltipPlacement} title={tooltipTitle} arrowPointAtCenter={false}>
                    {
                        isTextArea ?
                        <textarea value={value} onChange={onChange} 
                            className={`${after && 'after'} ${isError && 'error'}`} rows={9}
                        />:
                        <input value={value} onChange={onChange} 
                            className={`${after && 'after'} ${isError && 'error'}`} placeholder={placeholder}
                        /> 
                    }
                </Tooltip>
                <MyError choice={title} title={errorTitle}/>
                {after && <div className='afterValue'>
                {after}
            </div>}
        </div>
    )
}

export default MyInput
