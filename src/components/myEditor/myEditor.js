import React, { useEffect, useState } from 'react'
import './myEditor.scss'
import { useSelector, useDispatch } from 'react-redux'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { singleChoice } from '../../redux/actions';
import MyError from '../myError';

//The components (buttons, dropdowns, etc.) which can be used as toolbar items
// ClassicEditor.create( {} ).then( editor => {
//     console.log( Array.from( editor.ui.componentFactory.names() ) );
// } );

const EditorFormPanel = ({choice}) => {

    // const choices = useSelector(state=>state.choices)
    const dispatch = useDispatch()

    const errors = useSelector(state=>state.errors)
    const [isError, setIsError] = useState(false)

    useEffect(()=>{
        if(errors.includes(choice)){
            setIsError(true)
        } else{
            setIsError(false)
        }
    }, [errors, choice])

    return (
        <>
            <div className={`myEditor ${isError && 'error'} ${choice}`}>
                <CKEditor
                    editor={ ClassicEditor }
                    data=""
                    
                    onChange={ ( event, editor ) => {
                        const data = editor.getData()
                        dispatch(singleChoice({choice, value: data}))                        
                    } }

                    config = {{
                        toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList' ],
                    }}
                    
                />
            </div>
            <MyError choice={choice}/>
        </>
    )
}

export default EditorFormPanel
