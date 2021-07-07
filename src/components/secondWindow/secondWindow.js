import React, { useState, useRef, useEffect } from 'react'
import MultSelectHeader from '../multSelectHeader'
import './secondWindow.scss'
import CloseIcon from '@material-ui/icons/Close';
import MySelect from '../mySelect';
import { administracja, budownictwo, callcenter, finanse, edukacja, grafika, hotelarstwo, itadministracja, itprogramowanie, 
    inżynieria, kadry, lancuchDostaw, marketing, media, medycyna, nieruchomosci, fizyczna, offshore, produkcja, prawo, sztuka, sprzedaz, transport, zdrowie
} from '../../constants';
import ChoiceValue from '../choiceValue/choiceValue';
import { useSelector } from 'react-redux';

// Hook
function useOnClickOutside(ref, handler) {
    useEffect(
      () => {
        const listener = (event) => {
            console.log('clicked', event.target, event.target.classList.value)
          // Do nothing if clicking ref's element or descendent elements
          if( event.target.parentNode.classList.value.includes('ant') 
            || event.target.classList.value.includes('ant')
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

const SecondWindow = ({max}) => {

    const [isOpen, setIsOpen] = useState(false)
    const ref = useRef()
    const [search, setSearch] = useState('')

    const open = ()=>{
        setIsOpen(true)
    }

    const close = (e)=>{
        e.stopPropagation()
        setIsOpen(false)
    }

    useOnClickOutside(ref, () => setIsOpen(false));

    const onSearch = (e)=>{
        setSearch(e.target.value)
    }

    return (
        <div className='secondWindow' onClick={open}>
            <MultSelectHeader choice="sport" isOpen={false} isInner={false} isSingleValue={false} title="Wyberz"/>
            {isOpen && <div>
                <div className='window-bg'></div>
                <div className='window-outer'>
                    <div className='window' ref={ref}>
                        <div className='top'>
                            <div className='left'>Branża / kategoria</div>
                            <div className='right' onClick={close}><CloseIcon/></div>
                        </div>
                        <div className='searchDiv'>
                            <input type='text' onChange={onSearch}/>
                        </div>
                        <div className='body'>
                            <div className='col'>
                                <MySelect choice='administracja' choiceValues={administracja} isInner={true} title='Administracja' search={search} max={max}/>
                                <ChoiceValue choice='agencjePracy' value='Agencje pracy' key='Agencje pracy' isInner={false} isSingleValue={false} search={search} max={max}/>
                                <ChoiceValue choice='analizaStatystyka' value='Analiza / Statystyka' key='Analiza Statystyka' isInner={false} isSingleValue={false} search={search} max={max}/>
                                <MySelect choice='budownictwo' choiceValues={budownictwo} isInner={true} title='Architektura i budownictwo' search={search} max={max}/>
                                <MySelect choice='callcenter' choiceValues={callcenter} isInner={true} title='Call center' search={search} max={max}/>
                                <MySelect choice='finanse' choiceValues={finanse} isInner={true} title='Finanse' search={search} max={max}/>
                                <MySelect choice='edukacja' choiceValues={edukacja} isInner={true} title='Edukacja / Doradztwo / Szkolenia' search={search} max={max}/>
                                <MySelect choice='grafika' choiceValues={grafika} isInner={true} title='Grafika / Fotografia / Reklama' search={search} max={max}/>
                                <MySelect choice='hotelarstwo' choiceValues={hotelarstwo} isInner={true} title='Hotelarstwo / Gastronomia' search={search} max={max}/>
                                <MySelect choice='itadministracja' choiceValues={itadministracja} isInner={true} title='IT / Administracja' search={search} max={max}/>
                                <MySelect choice='itprogramowanie' choiceValues={itprogramowanie} isInner={true} title='IT / Programowanie' search={search} max={max}/>
                                <MySelect choice='inżynieria' choiceValues={inżynieria} isInner={true} title='Inżynieria' search={search} max={max}/>
                            </div>                    
                            <div className='col'>
                                <MySelect choice='kadry' choiceValues={kadry} isInner={true} title='Kadry / HR' search={search} max={max}/>
                                <ChoiceValue choice='kontrolaYakosci' value='Kontrola jakości / Audyt' key='Kontrola jakości / Audyt' isInner={false} isSingleValue={false} search={search} max={max}/>
                                <MySelect choice='lancuchDostaw' choiceValues={lancuchDostaw} isInner={true} title='Łańcuch dostaw' search={search} max={max}/>
                                <MySelect choice='marketing' choiceValues={marketing} isInner={true} title='Marketing / PR' search={search} max={max}/>
                                <MySelect choice='media' choiceValues={media} isInner={true} title='Media / Wydawnictwa' search={search} max={max}/>
                                <MySelect choice='medycyna' choiceValues={medycyna} isInner={true} title='Medycyna / Weterynaria' search={search} max={max}/>
                                <ChoiceValue choice='naprawa' value='Naprawa / Serwis / Usługi' key='Naprawa / Serwis / Usługi' isInner={false} isSingleValue={false} search={search} max={max}/>
                                <MySelect choice='nieruchomosci' choiceValues={nieruchomosci} isInner={true} title='Nieruchomości' search={search} max={max}/>
                                <MySelect choice='fizyczna' choiceValues={fizyczna} isInner={true} title='Praca fizyczna' search={search} max={max}/>
                                <MySelect choice='prawo' choiceValues={prawo} isInner={true} title='Prawo / Windykacja' search={search} max={max}/>
                                <MySelect choice='produkcja' choiceValues={produkcja} isInner={true} title='Produkcja / Przemysł' search={search} max={max}/>
                                <MySelect choice='offshore' choiceValues={offshore} isInner={true} title='Przemysł stoczniowy / Offshore' search={search} max={max}/>
                            </div>                    
                            <div className='col'>
                                <MySelect choice='transport' choiceValues={transport} isInner={true} title='Spedycja i transport' search={search} max={max}/>
                                <MySelect choice='sprzedaz' choiceValues={sprzedaz} isInner={true} title='Sprzedaż i obsługa klienta' search={search} max={max}/>
                                <MySelect choice='sztuka' choiceValues={sztuka} isInner={true} title='Sztuka / Rozrywka / Kultura' search={search} max={max}/>
                                <ChoiceValue choice='ubezpieczenia' value='Ubezpieczenia' key='Ubezpieczenia' isInner={false} isSingleValue={false} search={search} max={max}/>
                                <MySelect choice='zdrowie' choiceValues={zdrowie} isInner={true} title='Zdrowie / Uroda' search={search} max={max}/>
                            </div>                    
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default SecondWindow
