import React,{useState} from 'react'

import  logo from '../assets/images/logo.png'
import { FcMenu } from 'react-icons/fc'
import { IoMdClose } from 'react-icons/io'
import {Link} from 'react-scroll'
import '../style/components/Topbar.scss'

export function Topbar() {

    const [isOpen,setIsOpen] = useState<boolean>(false)
    const [icons,setIcons] = useState<any>(<FcMenu/>)
    const [displayMenu,setDisplayMenu] = useState<string>('none')
 
    const handleOpen = ()=>{
        setIsOpen(!isOpen)
        if(isOpen === false){
            setIcons(<IoMdClose/>)
            setDisplayMenu('block')
        }
        else {
            setIcons(<FcMenu/>)
            setDisplayMenu('none')
        }
    }

    return(
        <div id="Topbar">
            <header>
                <div className="logo-content">
                    <img src={logo} alt="logo do Gabriel Aparecido" />
                </div>
                <div className="menu-content">
                    <h2>menu</h2>
                    <Link 
                    className='item' 
                    to="Landing" 
                    spy={false} 
                    smooth={false}
                    onClick={handleOpen}
                    >{icons}
                    </Link>
                </div>
            </header>
            <div className="content-menu" style={{
                display: `${displayMenu}`
            }}>
                <h1>Menu</h1>
                <ul>
                    <li><Link 
                    className='item' 
                    to="about-me-content" 
                    spy={true} 
                    smooth={true}
                    onClick={handleOpen}
                    >Sobre Mim</Link></li>
                    <li><Link 
                    className='item' 
                    to="projects-content" 
                    spy={true}
                    smooth={true}
                    onClick={handleOpen}
                    >Projetos</Link></li>
                    <li><Link  
                    className='item' 
                    to="contact-content"
                    spy={true} 
                    smooth={true}
                    onClick={handleOpen}
                    >Contatos</Link></li>
                </ul>
            </div>
        </div>
    )
}