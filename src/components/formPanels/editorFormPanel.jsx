import React, { useEffect, useState } from 'react'
import './formPanels.scss'
import { useSelector, useDispatch } from 'react-redux'
import MyEditor from '../myEditor';
import MyInput from '../myInput';

//The components (buttons, dropdowns, etc.) which can be used as toolbar items
// ClassicEditor.create( {} ).then( editor => {
//     console.log( Array.from( editor.ui.componentFactory.names() ) );
// } );

const EditorFormPanel = () => {

    const choices = useSelector(state=>state.choices)
    const dispatch = useDispatch()

    return (
        <div className='form-panel'>
            <div className='title'>Treść ogłoszenia</div>

            <div className='row'>
                <div className='row-input'>
                    <div className='input-title star'>np. Wymagania / Obowiązki / Oferujemy</div>     
                    <MyEditor choice='text'/>
                </div>
            </div>

            <div className='row'>
                <div className='row-input'>
                    <div className='input-title star'>Klauzula dotycząca przetwarzania danych osobowych</div>     
                    <MyInput 
                        title='klauzula' 
                        isTextArea={true}
                        tooltipPlacement="topRight"
                        tooltipTitle={<><p>Wstaw tekst klauzuli dot. przetwarzania danych osobowych zgodny z wytycznymi Twojej organizacji lub skorzystaj z gotowej wersji.</p></>}
                    />               
                </div>
            </div>

        </div>
    )
}

export default EditorFormPanel
