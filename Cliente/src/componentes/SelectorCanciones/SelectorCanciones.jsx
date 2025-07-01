import React from 'react'

//Estilos
import './SelectorCanciones.css'

//Iconos
import { FaCirclePlay } from "react-icons/fa6";

const DataArrayCanciones = ['A las nueve', 'Dime que te paso', 'Colgando en tu manos', 'Mariposa Traicionera', 'Dime que no', 'Tu misterioso alguien', 'Rakata']

export default function SelectorCanciones() {
    return (
        <div id='SelectorCanciones'>
            <h2 id='TituloMisCanciones'>Mis Canciones</h2>
            <div id='WrapperCanciones'>
                {
                    DataArrayCanciones.map(elem =>
                    (
                        <div className='ElementoCancion_SelectorCanciones'>
                            <h2 className='NombreCancion_SelectorCanciones'>{elem}</h2>
                            <FaCirclePlay id='IconoPlay' />
                        </div>
                    )
                    )
                }
            </div>
        </div>
    )
}

