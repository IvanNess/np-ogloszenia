import React, { useState } from 'react'
import './myUpload.scss'
import { useDispatch } from 'react-redux'
import { Upload, message, Tooltip } from 'antd';
import { singleChoice } from '../../redux/actions';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';

//The components (buttons, dropdowns, etc.) which can be used as toolbar items
// ClassicEditor.create( {} ).then( editor => {
//     console.log( Array.from( editor.ui.componentFactory.names() ) );
// } );

const maxMb = 1

const MyUpload = ({title, description, tooltipTitle, tooltipPlacement}) => {

    // const choices = useSelector(state=>state.choices)
    const dispatch = useDispatch()

    const [imageUrl, setImageUrl] = useState(null)

    function beforeUpload(file) {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
          return message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < maxMb;
        if (!isLt2M) {
          return message.error(`Image must smaller than ${maxMb}MB!`);
        }

        let reader = new FileReader();
        // reader.readAsDataURL(file)
        reader.readAsDataURL(file)
        reader.onload = function() {
            const result = reader.result;
            setImageUrl(result)
            dispatch(singleChoice({choice: title, value: result}))
        }

        return isJpgOrPng && isLt2M;
    }

    const uploadButton = (
        <div>
          <ImageSearchIcon style={{color: "white"}} />
            <div style={{ marginTop: 8, color: "white" }}>{description}</div>
        </div>
      )

    return (
        <Tooltip title={tooltipTitle} placement={tooltipPlacement}>
            <div className={`wrapper ${imageUrl? 'with-image' : null} ${title}`}>
                <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    beforeUpload={beforeUpload}
                >
                    {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                </Upload>
            </div>   
        </Tooltip>
    )
}

export default MyUpload
