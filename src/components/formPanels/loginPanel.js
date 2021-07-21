import React, { useEffect, useState } from 'react'
import './formPanels.scss'
import MyInput from '../myInput';

const LoginPanel = () => {

    return (
        <div className='form-panel'>
            <div className='title'>Logowanie</div>

            <div className='row'>
                <div className='row-input'>
                    <div className='input-title star'>Twój login / e-mail</div>     
                    <MyInput title='login' />               
                </div>
                <div className='row-input'>
                    <div className='input-title star'>Podaj hasło</div>     
                    <MyInput title='password' />               
                </div>
                <div className='row-input login-btn'>
                    <button>Zaloguj się</button>
                </div>
            </div>

        </div>
    )
}

export default LoginPanel
