import React from 'react'
import '../style/Contac.scss'
import { Header } from '../components/Header'
import { ButtonBack } from '../components/ButtonBack'

export function Contact() {
    return(
        <div id="Contact">
             <div className="button-field">
                <ButtonBack/>
            </div>
            <div className="header-content-contact">
                <Header/>
            </div>
            <div className="principal-content-contact">
                <div className="intro-contact">
                    <h1>Busco por oportunidades</h1>
                </div>
                <div className="contact-ways">
                    <div className="contact-text-content">
                        <h1>Contato</h1>
                        <p>Estou procurando por oportunidades de estágio na área de TI.Busco pela minha primeira expêriencia profissional.E de tal modo poder aprender e melhorar cada vez mais minhas habilidades.</p>
                        <p>Se isso te pareceu agradável,por quê não trabalharmos juntos?</p>
                    </div>
                    <div className="social-media-content">
                        <div className="individual-media">
                            <a href="mailto:gabriel.aparecido.silva03@gmail.com">gabriel.aparecido.silva03@gmail.com</a>
                        </div>
                        <div className="individual-media">
                            <a href="https://www.instagram.com/__gabriel.ap/">Instagram</a>
                        </div>
                        <div className="individual-media">
                            <a href="https://www.linkedin.com/in/gabriel-aparecido-da-silva-a85099228/">Linkedin</a>
                        </div>
                        <div className="individual-media">
                            <a href="https://github.com/Gabriel-Aparecido03">Github</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}