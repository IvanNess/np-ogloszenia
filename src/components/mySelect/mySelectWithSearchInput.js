import React, { useState, useEffect, useRef } from 'react'
import './mySelect.scss'
import ChoiceValue from '../choiceValue/choiceValue'
import { useSelector } from 'react-redux';
import MyError from '../myError';
import MyInput from '../myInput';

// Hook
function useOnClickOutside(ref, handler) {
    useEffect(
      () => {
        const listener = (event) => {
          // console.log('clicked', event.target, event.target.classList.value)
          // Do nothing if clicking ref's element or descendent elements
          // if( event.target.parentNode.classList.value === 'MuiSvgIcon-root' 
          //   || event.target.classList.value === 'MuiSvgIcon-root'
          //   || event.target.classList.value.includes('Sidebar_menuIcons_')
          // )
          //   return
          if (!ref.current || ref.current.contains(event.target)) {
            return;
          }
          handler(event);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
          document.removeEventListener("mousedown", listener);
          document.removeEventListener("touchstart", listener);
        };
      },
      // Add ref and handler to effect dependencies
      // It's worth noting that because passed in handler is a new ...
      // ... function on every render that will cause this effect ...
      // ... callback/cleanup to run every render. It's not a big deal ...
      // ... but to optimize you can wrap handler in useCallback before ...
      // ... passing it into this hook.
      [ref, handler]
    );
}

const MySelectWithSearchedInput = ({
  choice, choiceValues, isInner=false, isSingleValue=false, max, initSingleChoice, placeholder
}) => {

    const [isOpen, setIsOpen] = useState(false)
    const ref = useRef()
    const values = useSelector(state=>state.choices[choice] || [])
    const language = useSelector(state=>state.language)
    const choices = useSelector(state=>state.choices)
    const errors = useSelector(state=>state.errors)
    const [isError, setIsError] = useState(false)

    const click =()=>{
        setIsOpen(true)
    }

    useOnClickOutside(ref, () => setIsOpen(false));

    // useEffect(()=>{
    //     // console.log('mySelect useEffect', isOpen, values)
    //     if(isSingleValue && values.length !== 0){
    //         console.log('close')
    //         setIsOpen(false)
    //     }
    // }, [values, isSingleValue])

    useEffect(()=>{
      // console.log('mySelect useEffect', isOpen, values)
      if(values.length !== 0 && !initSingleChoice){
          console.log('open')
          setIsOpen(true)
      }
    }, [])

    useEffect(()=>{
      if(errors.includes(choice)){
          setIsError(true)
      } else{
          setIsError(false)
      }
    }, [errors])

    const getFoundQauntity = ()=>{
      const foundQuantity = choiceValues.filter(value=>{
        return (
          value[language].toLowerCase().includes(choices[choice]?.toLowerCase().trim()) ||
          choices[choice] === undefined
        )
      })
      // console.log('foundQuantity', foundQuantity)
      return foundQuantity.length
    }

    const valuesClicked = ()=>{
      setIsOpen(false)
    }

    return (
      <>
        <div className={`mySelect ${isError && 'error'} ${choice}`} ref={isInner ? null : ref }>
            <div 
              // className={`
              //   header ${isOpen && 'open'} ${(isInner && values.length > 0) && 'not-closeable'} 
              //   ${isInner && 'inner'} ${isError && 'error'}
              // `} 
              onClick={click}
            >
                {/* <MultSelectHeader choice={choice} isOpen={isOpen} choiceValues={choiceValues}
                  isInner={isInner} isSingleValue={isSingleValue} title={title} initSingleChoice={initSingleChoice}
                /> */}
                <MyInput title={`${choice}Input`} errorTitle={`Sprawdź nazwę tego miasta.`} placeholder={placeholder}/>
            </div>
            <div 
                className={`choices ${isOpen? 'open': 'closed'} ${isInner && 'inner'} ${getFoundQauntity()>11 && 'overflow'}`}
                onClick={valuesClicked}
            >
                {choiceValues.map(choiceValue=> (
                    <ChoiceValue choice={choice} value={choiceValue} key={choiceValue.key} isInner={isInner} 
                      isSingleValue={isSingleValue} max={max} search={choices[`${choice}Input`]}
                    />
                ))}
            </div>
            <MyError choice={choice}/>
        </div>
      </>
    )
}

export default MySelectWithSearchedInput
