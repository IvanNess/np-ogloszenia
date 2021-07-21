import React, { useEffect, useState } from 'react'
import './formPanels.scss'
import { useSelector, useDispatch } from 'react-redux'
import MyEditor from '../myEditor';
import MyInput from '../myInput';
import MyUpload from '../myUpload/myUpload';

//The components (buttons, dropdowns, etc.) which can be used as toolbar items
// ClassicEditor.create( {} ).then( editor => {
//     console.log( Array.from( editor.ui.componentFactory.names() ) );
// } );

const FirmInfoPanel = () => {

    const choices = useSelector(state=>state.choices)
    const dispatch = useDispatch()

    return (
        <div className='form-panel'>
            <div className='title'>Informacje o firmie</div>

            <div className='row'>
                <div className='row-input'>
                    <div className='input-title'>Logo firmy</div>  
                    <MyUpload 
                        title='firmLogo' 
                        description={<>Dodaj logo<br/>MAX 1MB</>}
                        tooltipPlacement="topRight"
                        tooltipTitle={<p>Akceptujemy formaty zdjęć: *.png, *.jpg, *.gif</p>}
                    /> 
                </div>                
            </div>

            <div className='row'>
                <div className='row-input'>
                    <div className='input-title'>Opis</div>     
                    <MyEditor choice='firmInfoDescription'/>
                </div>
            </div>

        </div>
    )
}

export default FirmInfoPanel
