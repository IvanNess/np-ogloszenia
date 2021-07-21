import React, { useEffect, useState } from 'react'
import './formPanels.scss'
import MyUpload from '../myUpload/myUpload';

//The components (buttons, dropdowns, etc.) which can be used as toolbar items
// ClassicEditor.create( {} ).then( editor => {
//     console.log( Array.from( editor.ui.componentFactory.names() ) );
// } );

const ImageFormPanel = ({title}) => {

    return (
        <div className='form-panel'>
            <div className='title'>Dodaj nagłówek</div>

            <div className='row'>
                <div className='row-input'>
                    <div className='input-title'>Dodaj nagłówek graficzny do ogłoszenia</div>  
                    <MyUpload 
                        title={title} 
                        description={'Dodaj grafikę nagłówka'} 
                        tooltipTitle={<p>Akceptujemy formaty zdjęć: *.png, *.jpg, *.gif</p>}
                        tooltipPlacement='topRight'
                    /> 
                </div>                
            </div>

        </div>
    )
}

export default ImageFormPanel
