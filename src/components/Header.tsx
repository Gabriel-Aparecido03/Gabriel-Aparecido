import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

import '../style/header.scss'

export function Header() {

    const [text,setText] = useState<string>('gabriel.')
    const navigate = useNavigate()

    const handleNavigateToHome = () => {
        navigate('/')
    }   

    

    const handleHover = (e:any) => {
        e.target.style.transition = '.3s'
        e.target.style.paddingRight = '.5rem'
        setText('gabriel.home')
        
    }

    const handleLeave = (e:any)=> {
        e.target.style.transition = '0s'
        e.target.style.paddingRight = '0'
        setText('gabriel.')
    }

    return(
        <header className='header'>
            <p
            onClick={handleNavigateToHome}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            >{text}</p>
        </header>
    )
}