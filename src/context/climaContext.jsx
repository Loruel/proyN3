import { useContext, useEffect, useState } from "react"
import { createContext } from "react"




const climaContext = createContext()

export function ClimaProvider({ children }) {

    ///Lat y Lon
    const [lat, setLat] = useState(19.4326)
    const [lon, setLon] = useState(-99.1332)

    ///Clima de un solo HOY
    const [clima, setClima] = useState([])

    ///Puchurrar los botones de F y C
    const [buttonCF, setButtonCF] = useState('F')


    ///Converciones de K
    function KaCelsius(kelvin) {
        return kelvin - 273.15
    }

    function KaFhrenheit(kelvin) {
        return (kelvin - 273.15) * 9 / 5 + 32
    }

    function maMilla(m) {
        return m / 1609.34
    }


    //Datos diarios
    async function getData() {
        try {
            const rs = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=be6606f57229709f696e7669f6bdc185`)
            const rsjson = await rs.json()

            setClima(rsjson)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getData()
    }, [lat, lon])

    ///Pronostico 
    const [pronostico, setPronostico] = useState([])

    async function getPronostico() {
        try {
            const rs = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=32.7157&lon=-117.1611&appid=be6606f57229709f696e7669f6bdc185`)
            const rsjson = await rs.json()

            setPronostico(rsjson)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getPronostico()
    }, [lat, lon])

    ///Cada24goras
    const porDia = [7, 15, 23, 31, 39]

    ///Fecha
    const today = new Date()
    const todayToday = today.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' })

    ///Imagenes del clima
    const getImage = (type) => {
        const typeImge = {
            '01d': '/01d.png',
            '02d': '/02d.png',
            '03d': '/03d.png',
            '04d': '/04d.png',
            '09d': '/09d.png',
            '10d': '/10d.png',
            '11d': '/11d.png',
            '13d': '/13d.png',
            '50d': '/50d.png',
            '01n': '/01d.png',
            '02n': '/02d.png',
            '03n': '/03d.png',
            '04n': '/04d.png',
            '09n': '/09d.png',
            '10n': '/10d.png',
            '11n': '/11d.png',
            '13n': '/13d.png',
            '50n': '/50d.png'
        }
        return typeImge[type] || 'null'
    }

    ///Abreviaturas
    const getAbreviatura = (grados) => {
        const typeAbreviatura = [
            { rango: [0, 22.5], abreviacion: 'N' },
            { rango: [22.5, 67.5], abreviacion: 'NNE' },
            { rango: [67.5, 112.5], abreviacion: 'NE' },
            { rango: [112.5, 157.5], abreviacion: 'ENE' },
            { rango: [157.5, 202.5], abreviacion: 'E' },
            { rango: [202.5, 247.5], abreviacion: 'ESE' },
            { rango: [247.5, 292.5], abreviacion: 'SE' },
            { rango: [292.5, 337.5], abreviacion: 'SSE' },  
            { rango: [337.5, 360], abreviacion: 'S' },
            { rango: [0, 22.5], abreviacion: 'SSW' },
            { rango: [22.5, 67.5], abreviacion: 'SW' },
            { rango: [67.5, 112.5], abreviacion: 'WSW' },
            { rango: [112.5, 157.5], abreviacion: 'W' },
            { rango: [157.5, 202.5], abreviacion: 'WNW' },
            { rango: [202.5, 247.5], abreviacion: 'NW' },
            { rango: [247.5, 292.5], abreviacion: 'NNW' },
            { rango: [292.5, 337.5], abreviacion: 'N' }
        ];

        let rsAbreviacion = 'Unknown';

        typeAbreviatura.forEach(({ rango, abreviacion }) => {
            if (grados >= rango[0] && grados < rango[1]) {
                rsAbreviacion = abreviacion;
            }
        });

        return rsAbreviacion
    }

    ///modal
    const [openMenu, setOpenMenu] = useState(false);

    const toggleModal = () => {
        setOpenMenu(!openMenu);
    };





    return (
        <climaContext.Provider value={{ clima, todayToday, pronostico, getImage, porDia, openMenu, toggleModal, setLat, setLon, KaCelsius, KaFhrenheit, maMilla, buttonCF, setButtonCF, getAbreviatura }}>
            {children}
        </climaContext.Provider>
    )
}

export function useClima() {
    return useContext(climaContext)
}