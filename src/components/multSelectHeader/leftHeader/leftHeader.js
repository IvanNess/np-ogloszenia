import React from 'react'
import './leftHeader.scss'
import CloseIcon from '@material-ui/icons/Close';

const LeftHeader = ({values, choice, closeClick, title}) => {
    return (
        <div className='leftHeader'>
            {
                values.length === 0 ? title :
                values.map(value=>{
                    return(
                        <div className={`value`} key={value}>
                            {value}
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
