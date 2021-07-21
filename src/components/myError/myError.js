import React, { useState, useEffect } from 'react'
import InfoIcon from '@material-ui/icons/Info'
import { useSelector } from 'react-redux'
import './myError.scss'

const MyError = ({title=`To pole jest wymagane`, choice}) => {

    const errors = useSelector(state=>state.errors)
    const [isError, setIsError] = useState(false)

    useEffect(()=>{
        console.log('myerror useeffect choice', choice, errors.includes(choice))
        if(errors.includes(choice)){
            setIsError(true)
        } else{
            setIsError(false)
        }
      }, [errors, choice])

    return (
        <div className={`myError`}>
            {isError && <div className={`error-message`}>
              <InfoIcon style={{color: '#ed1c24', fontSize: 'small'}}/> &nbsp; {title}
            </div>}
        </div>
    )
}

export default MyError
