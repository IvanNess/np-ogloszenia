import { wikiCities } from "./wikiCities"

export const getValuesFromKeys = (keys, obj, language)=>{
    const items = keys?.map(key=>{
        return obj.find(item=>item.key===key)
    })
    return items.map(item=>item?.[language]).join(', ')
}

export const createCitiesFromWikiCities = () =>{
    const $wikiCities = document.createElement('div')
    $wikiCities.innerHTML = wikiCities
    const citiesNodeArr = $wikiCities.querySelectorAll(' tbody tr')
    const citiesArr = Array.from(citiesNodeArr)
    const cities = citiesArr.map((city, i)=>{
    return {
            key: i,
            pl: city.querySelector('td:nth-child(2) a').innerHTML,
            ru: city.querySelector('td:nth-child(2) i').innerHTML.slice(0, -1).trim(),
            ruWojewodstwo: city.querySelector('td:nth-child(3) a').innerHTML
        }
    })
    return cities
}