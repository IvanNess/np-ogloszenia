import React from 'react'
import './innerLeftHeader.scss'
import CloseIcon from '@material-ui/icons/Close'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank'
import CheckBoxIcon from '@material-ui/icons/CheckBox'

const InnerLeftHeader = ({values, choice, title, isOpen}) => {
    return (
        <div className='innerLeftHeader'>
            {
                values.length > 0 ? <CheckBoxIcon style={{color: '#ccc'}}/> : 
                isOpen ? <IndeterminateCheckBoxIcon style={{color: "#ccc"}}/> : <CheckBoxOutlineBlankIcon style={{color: "#ccc"}}/>
            }
            {title}
            {   isOpen ? <ArrowDropUpIcon/> : <ArrowDropDownIcon/>   }
        </div>
    )
}

export default InnerLeftHeader
