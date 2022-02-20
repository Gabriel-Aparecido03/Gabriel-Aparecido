import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../style/components/button.scss'

export function ButtonBack() {
    const navigate = useNavigate()

    return (
        <div id="ButtonBack" onClick={()=>{navigate('/')}}>
            <button>Voltar para o Início</button>
        </div>
    )
}