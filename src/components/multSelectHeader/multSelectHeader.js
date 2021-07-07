import React from 'react'
import './multSelectHeader.scss'
import { useSelector, useDispatch } from 'react-redux';
import CancelIcon from '@material-ui/icons/Cancel';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { removeChoice, removeAllValues } from '../../redux/actions';
import LeftHeader from './leftHeader';
import InnerLeftHeader from './innerLeftHeader';

const MultSelectHeader = ({choice, isOpen, isInner, isSingleValue, title}) => {

    const values = useSelector(state=>state.choices[choice] || (isSingleValue ? false : []))
    const dispatch = useDispatch()

    const closeClick=(e, value)=>{
        e.stopPropagation()
        console.log('close')
        dispatch(removeChoice({choice, value}))
    }

    const cancelClick=(e)=>{
        if(values.length > 0){
            e.stopPropagation()
            console.log('choice', choice)
            dispatch(removeAllValues({choice}))
        }
    }

    return (
        <div className='multSelectHeader'>
            <div className={`left`}>
                {
                    isSingleValue ? (values ? values : title) :
                    isInner ? <InnerLeftHeader values={values} choice={choice} closeClick={closeClick} isOpen={isOpen} title={title}/>
                    : <LeftHeader values={values} choice={choice} closeClick={closeClick} title={title}/>
                }
                
            </div>
            <div className={`right ${isInner && 'inner'}`} onClick={cancelClick}>
                {values.length > 0 && <CancelIcon style={{fontSize: '15px'}}/>}
                {!isOpen && (values.length === 0 || isSingleValue) &&<KeyboardArrowDownIcon/>}
                {isOpen && (values.length === 0 || isSingleValue) && <KeyboardArrowUpIcon/>}
            </div>
        </div>
    )
}

export default MultSelectHeader
