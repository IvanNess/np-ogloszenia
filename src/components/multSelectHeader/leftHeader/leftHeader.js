import React from 'react'
import './leftHeader.scss'
import CloseIcon from '@material-ui/icons/Close';
import { useSelector } from 'react-redux';

const LeftHeader = ({values=[], choice, closeClick, title, choiceValues=[]}) => {

    const language = useSelector(state=>state.language)

    return (
        <div className='leftHeader'>
            {
                values.length === 0 ? title :
                values.map(value=>{
                    console.log('values value', values, value)
                    return(
                        <div className={`value`} key={value}>
                            {choiceValues.find(choiceValue=>choiceValue.key===value)[language]}
                            <div className={`closeWrapper`} onClick={(e)=>closeClick(e, value)}>
                                <CloseIcon style={{fontSize: '15px'}}/>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default LeftHeader
