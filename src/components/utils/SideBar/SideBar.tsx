import React,{useState,useEffect} from 'react'

import  logo from '../../../assets/images/logo-1.png'

import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import Hamburger from 'hamburger-react'

import './style.scss'

export function SideBar() {

    const [isOpen,setOpen] = useState<boolean>(false)
    return(
        <div id="Topbar">
            <div className="container-top-bar">
                <div className="image-container-top-bar">
                    <img src={logo} alt="logo do meu site" />
                </div>
                <div className="text-content-top-bar">
                    <ul>
                        <li>
                            <Link
                            to='about-me-content'
                            smooth={true}
                            spy={true}
                            onClick={()=>{setOpen(false)}}
                        >
                            Sobre mim</Link>
                        </li>
                        <li>
                            <Link
                            to='projects-content'
                            smooth={true}
                            spy={true}
                            onClick={()=>{setOpen(false)}}
                            >Projetos</Link>
                        </li>
                        <li>
                            <Link
                            to='contact-content'
                            smooth={true}
                            spy={true}
                            onClick={()=>{setOpen(false)}}
                            >
                                Entrar em contato
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="hamburger-container">
                    <Hamburger 
                    rounded
                    color= {isOpen?'#fff':'#30475E'}
                    direction='right'
                    duration={.4}
                    toggled={isOpen} 
                    toggle={setOpen}
                    size={20}
                    />
                </div>
                <div 
                className="side-bar-container"
                style={{
                    display:isOpen?'flex':'none',
                    transform: isOpen?'translateX(0)':'translateX(0)',
                }}
                >
                   
                    <div className="action-content">
                        <div className="topics-side-bar-container">
                            <ul>
                                <li>
                                <Link
                                to='intro-content'
                                smooth={true}
                                spy={true}
                                onClick={()=>{setOpen(false)}}
                            >
                                Sobre mim</Link>
                            </li>
                            <li>
                            <Link
                            to='projects-content'
                            smooth={true}
                            spy={true}
                            onClick={()=>{setOpen(false)}}
                            >Projetos</Link>
                            </li>
                            <li>
                            <Link
                            to='contact-content'
                            smooth={true}
                            spy={true}
                            onClick={()=>{setOpen(false)}}
                            >
                                Entrar em contato
                            </Link>
                        </li>
                            </ul>
                        </div>
                        <div className="button-resume-container">
                            <button ><a href="https://drive.google.com/file/d/1IuyFk51udRZWIIY1qHTfScSAVT-QCxBp/view?usp=sharing">Curriculo</a></button>
                        </div>
                        </div>
                    </div>
                    <div 
                    className="background-translucid"
                    style={{
                        display:isOpen?'flex':'none',
                    }}
                    >
                        
                    </div>
                
            </div>
            
        </div>
    )
}