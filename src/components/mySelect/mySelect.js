import React, { useState, useEffect, useRef } from 'react'
import './mySelect.scss'
import ChoiceValue from '../choiceValue/choiceValue'
import MultSelectHeader from '../multSelectHeader';
import { useSelector } from 'react-redux';

// Hook
function useOnClickOutside(ref, handler) {
    useEffect(
      () => {
        const listener = (event) => {
            // console.log('clicked', event.target, event.target.classList.value)
          // Do nothing if clicking ref's element or descendent elements
          if( event.target.parentNode.classList.value === 'MuiSvgIcon-root' 
            || event.target.classList.value === 'MuiSvgIcon-root'
            || event.target.classList.value.includes('Sidebar_menuIcons_')
          )
            return
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

const MySelect = ({choice, choiceValues, isInner=false, isSingleValue=false, title, max, search}) => {

    const [isOpen, setIsOpen] = useState(false)
    const ref = useRef()
    const values = useSelector(state=>state.choices[choice] || [])

    const click =()=>{
        if(isInner && values.length > 0)
            return
        console.log('click', isOpen)
        setIsOpen(value=>!value)
    }

    useOnClickOutside(ref, () => setIsOpen(false));

    useEffect(()=>{
        // console.log('mySelect useEffect', isOpen, values)
        if(isSingleValue && values.length !== 0){
            console.log('close')
            setIsOpen(false)
        }
    }, [values, isSingleValue])

    useEffect(()=>{
      // console.log('mySelect useEffect', isOpen, values)
      if(values.length !== 0){
          console.log('open')
          setIsOpen(true)
      }
    }, [])

    const isSearchedHere = ()=>{
      if(!search)
        return true
      const searched = choiceValues.find(value=>{
        return value.toLowerCase().includes(search.toLowerCase().trim())
      })
      if(searched){
        return true
      }
      return false
    }

    return (
      <>
        {isSearchedHere() && <div className={`mySelect`} ref={isInner ? null : ref }>
            <div className={`header ${isOpen && 'open'} ${(isInner && values.length > 0) && 'not-closeable'} ${isInner && 'inner'}`} onClick={click}>
                <MultSelectHeader choice={choice} isOpen={isOpen} isInner={isInner} isSingleValue={isSingleValue} title={title}/>
            </div>
            <div className={`choices ${isOpen? 'open': 'closed'} ${isInner && 'inner'}`}>
                {choiceValues.map(choiceValue=> (
                    <ChoiceValue choice={choice} value={choiceValue} key={choiceValue} isInner={isInner} isSingleValue={isSingleValue} max={max} search={search}/>
                ))}
            </div>
        </div>}
      </>
    )
}

export default MySelect
