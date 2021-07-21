import React, { useEffect, useState } from 'react'
import './formPanels.scss'
import { useSelector, useDispatch } from 'react-redux'
import MyEditor from '../myEditor';
import MyInput from '../myInput';
import MyUpload from '../myUpload/myUpload';

const MediaPanel = () => {

    const choices = useSelector(state=>state.choices)
    const dispatch = useDispatch()

    return (
        <div className='form-panel'>
            <div className='title'>Zdjęcia i filmy</div>

            <div className='row'>
                <div className='row-input'>
                    {/* <div className='input-title'>Logo firmy</div>   */}
                    <MyUpload title='media' description={<>Dodaj zdjęcia<br/>lub video</>}/> 
                </div>                
            </div>

            <div className='row'>
                <div className='row-input'>
                    <div className='input-title'>Link do video w serwisie YouTube</div>     
                        <MyInput 
                            title='slowaKluczowe' 
                            // tooltipPlacement="topRight"
                            // tooltipTitle={<><p>Dodaj słowa kluczowe. Aż do 60% większej skuteczności.</p><p>Słowa kluczowe oddzielaj przecinkiem.</p></>}
                        />               
                </div>
            </div>

        </div>
    )
}

export default MediaPanel
