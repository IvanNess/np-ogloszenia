import React, { useEffect, useState } from 'react'
import './ogloszenia.scss'
import Ogloszenie from '../ogloszenie'
import OgloszeniaFilter from '../ogloszeniaFilter'
import axios from 'axios'
import { apiUrl } from '../../constants'
const queryString = require('query-string')

const Ogloszenia = () => {

    const [ogloszenia, setOgloszenia] = useState([])

    useEffect(()=>{

        const query = queryString.parse(window.location.search)

        console.log('query', query)

        getOgloszenia()

        async function getOgloszenia(){
            const ogloszenia = await axios({
                method: "POST",
                url: `${apiUrl}/getvacancies`,
                withCredentials: true,
                data: {vacancy: query}
            })
            console.log('ogloszenia', ogloszenia)
            setOgloszenia(ogloszenia.data.vacancies)
        }
    }, [])

    return (
        <div className={`ogloszenia`}>

            <OgloszeniaFilter/>

            {/* <Ogloszenie/>
            <Ogloszenie/>
            <Ogloszenie/>
            <Ogloszenie/>*/}

            {ogloszenia.map(ogloszenie=><Ogloszenie vacancy={ogloszenie}/>)}

            
        </div>
    )
}

export default Ogloszenia
