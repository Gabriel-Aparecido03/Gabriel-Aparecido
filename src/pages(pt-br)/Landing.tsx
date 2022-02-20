import React,{useState} from 'react'

import {  useNavigate } from 'react-router-dom'


import  '../style/Landing.scss'

import perfilPhoto from '../assets/images/Design sem nome-1 1(3).svg'

export function LandingPtBr() {

    const [textAbout,setTextAbout] = useState<string>('Olá.')
    const [textProjects,setTextProjects] = useState<string>('Sou')
    const [textContac,setTextContact] = useState<string>('Gabriel')
    const [isClicked,setIsClicked] = useState<boolean>(false)

    const navigate = useNavigate()

    const handleChangeIntro = (e:any) =>{
        setIsClicked(!isClicked)

        if(isClicked === true) {
            setTextAbout('Sobre')
            setTextProjects('Projetos')
            setTextContact('Contatos')
        }
        else {
            setTextAbout('Olá.')
            setTextProjects('Sou')
            setTextContact('Gabriel')
        }
    }

    const handleNavigateAbout = (e:any)=> {
        navigate('/about')
    }

    const handleHoverAbout = (e:any) => {
        setTextAbout('Sobre')
    }

    const handleLeaveAbout = (e:any) => {
        setTextAbout('Olá.')
    }


    const navigateProject = (e:any) => {
        navigate('/projects')
    }

    const handleHoverProjects = (e:any) =>{
        setTextProjects('Projetos')
    }

    const handleLeaveProjects = (e:any) =>{
        setTextProjects('Sou')
    }


    const navigateToContac = (e:any) => {
        navigate('/contact')
    }

    const handleHoverContact = (e:any) => {
        setTextContact('Contato')
    } 

    const handleLeaveContact = (e:any) => {
        setTextContact('Gabriel')
    }

    return (
        <div id="Landing" onClick={handleChangeIntro}>
            
            <div className="photo-content">
                <img  
                src={perfilPhoto} 
                alt="minha foto de rosto" 
               
                />
            </div>
            <div className="text-content">
                <div className="first-content">
                    <div className="content">
                        <p 
                        className='hi-content'
                        onMouseEnter={handleHoverAbout}
                        onMouseLeave={handleLeaveAbout}
                        onClick={handleNavigateAbout}
                        >{textAbout}</p>
                    </div>
                </div>
                <div className="second-content">
                    <p className='im-content'
                    onMouseEnter={handleHoverProjects}
                    onMouseLeave={handleLeaveProjects}
                    onClick={navigateProject}
                    >{textProjects}</p>
                </div>
                <div className="third-content">
                    <p 
                    className='name-content'
                    onMouseEnter={handleHoverContact}
                    onMouseLeave={handleLeaveContact}
                    onClick={navigateToContac}
                    >{textContac}</p>
                </div>
            </div>
            <div className="touch-anywhere">
                <p>Toque em qualquer lugar</p>
            </div>
        </div>
    )
}