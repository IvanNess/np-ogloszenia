import React from 'react'
import './ogloszenie.scss'
import { sezonowa, charakterPracy, titles, rodzajArr, wymiarPracy } from '../../constants'
import { getValuesFromKeys } from '../../accessories'
import { cities } from '../../cities'



const Ogloszenie = ({vacancy={
    "id": 25,
    "createdAt": "2021-07-16T23:11:42.894Z",
    "userId": 16,
    "stanowisko": "sffff",
    "categories": [
        "agencjePracy",
        "ubezpieczenia"
    ],
    "rodzaj": [
        "umowaODzielo", "umowaOPrace"
    ],
    "poziomStanowiska": [
        "kierownik",
        "pracownikFizyczny"
    ],
    "wymiarPracy": ["czescEtatu", "sezonowa"],
    "charakterPracy": [
        "zdalna"
    ],
    "zarobkimin": null,
    "zarobkimax": null,
    "nrreferencyjny": null,
    "forYoung": null,
    "student": null,
    "niepelnosprawnosc": true,
    "zagranica": null,
    "sanksiazeczka": null,
    "rekrutacjaOnline": true,
    "slowaKluczowe": [
        "xv ggg",
        "egggg"
    ],
    "naglowek": "http://res.cloudinary.com/dp5pejtbu/image/upload/v1626477100/r5y1kvnfw1mv9khpkdqo.jpg",
    "text": "<p>eeeeee</p>",
    "klauzula": "Wyrażam zgodę na przetwarzanie moich danych osobowych w celu rekrutacji zgodnie z art. 6 ust. 1 lit. a Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych).",
    "firmOrPrivate": "firm",
    "firmLogo": "http://res.cloudinary.com/dp5pejtbu/image/upload/v1626477101/pt7agselsob1gbjzfbsn.png",
    "firmInfoDescription": null,
    "miasto": "134",
    "adress": null,
    "nazwa": "dddd",
    "email": "ivanspursic@gmail.com",
    "phone": "695771640",
    "firmAppLink": null,
    "nip": "1234455",
    "contactMiasto": null,
    "contactAdress": null,
    "posrednictwo": null,
    "endedAt": null,
    "aktualizacja": "Aktualizacja: 4 dni temu"
}, language='pl'}) => {

    return (
        <div className={`ogloszenie`} key={vacancy.id}>
            <div className={`left`}>
                <div className={`img-wrapper`}>
                    <img src={vacancy.firmLogo} className={`firmLogo`} alt=''/>
                </div>
            </div>           
            <div className={`right`}>
                <div className={`top`}>
                    <div className={`right-top-left`}>
                        <div className={`stanowisko`}><h2>{vacancy.stanowisko}</h2></div>
                        <div className={`miastoAnd`}>
                            <div className={`miasto`}>{cities.find(city=>city.key===vacancy.miasto)?.[language]}</div>
                            <div className={`season`}>{vacancy.wymiarPracy.includes('sezonowa')? sezonowa[language]: null}</div>
                        </div>
                        <div className={`charakterPracy titleValue`}>
                            <div className={`title`}>{titles.charakterPracy?.[language]}</div>
                            <div className={`value`}>{getValuesFromKeys(vacancy.charakterPracy, charakterPracy, language)}</div>
                        </div>
                        <div className={`rodzaj titleValue`}>
                            <div className={`title`}>{titles.rodzaj?.[language]}</div>
                            <div className={`value`}>{getValuesFromKeys(vacancy.rodzaj, rodzajArr, language)}</div>
                        </div>
                        <div className={`wymiarPracy titleValue`}>
                            <div className={`title`}>{titles.wymiarPracy?.[language]}</div>
                            <div className={`value`}>{getValuesFromKeys(vacancy.wymiarPracy, wymiarPracy, language)}</div>
                        </div>
                    </div>
                    <div className={`right-top-right`}>
                        <div className={`type`}>{vacancy.type}</div>
                        <div className={`nazwa`}><a href={`/ogloszenie?firma=${vacancy.nazwa}`}>{vacancy.nazwa}</a></div>         
                    </div>
                </div>
                <div className={`bottom`}>
                    <div className={`right-bottom-left`}>
                        <div className={`aktualizacja`}>{vacancy.aktualizacja || 'Aktualizacja: 21 minut temu'}</div>
                    </div>
                    <div className={`right-bottom-right`}>
                        <div className={`obserwuj`}>{vacancy.obserwuj}</div>
                        <div className={`zglos`}>{vacancy.zglos}</div>
                    </div>
                </div>
            </div>             
        </div>
    )
}

export default Ogloszenie
