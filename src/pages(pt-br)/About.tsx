import React from 'react'

import { ButtonBack } from '../components/ButtonBack'

import { Header } from '../components/Header'

import '../style/About.scss'

export function About() {
    return (
        <div id="About">
            <div className="button-field">
                <ButtonBack/>
            </div>
            <div className="header-content">
                <Header/>
            </div>
            <div className="principal-content-about">
                <div className="intro-content-about">
                    <h1>Sou desenvolvedor Web &amp; Mobile</h1>
               </div>
               <div className="about-text-content">
                   <h1>Sobre mim</h1>
                   <h3>Me chamo Gabriel Aparecido,tenho 18 anos.Moro em Sorocaba,interior de São Paulo.Sou um entusiasta de tecnologias web &amp; mobile.</h3>
                    <p>
                        No meu dia a dia gosto de usar tecnologias como:Typescript,ReactJS,Firebase,React Native e Sass.
                    </p>
                    <p>
                        Comecei a estudar programação com 12 anos,aprendendo lógica de programação e algoritmo em VisualAlg,depois fiz projeto simples no Scratch e também fazendo jogos simples no Construct 2.Porém com meus 14 anos decidi focar no vestibular,e desse mode deixando de lado a área da programação.Porém no ano de 2019,voltei a estuda tecnologia.
                    </p>
                    <p>
                        Amo o sentimento de desafio.Não sou uma pessoa de recuar ao um bom desafio,gosto de me sentir,por tal motivo sempre busco pro projetos que possam ser úteis e que gerem dificultades.Sempre busco cada vez me tornar mais resiliente e paciente.
                    </p>    
                    <p>
                        Gosto de desenvolver conhecimentos em várias áreas,já li livros como :Uma Breve História do Tempo do Stephen Hawking,Incognito do David Eagleman,Rápido e Devagar do David Eagleman,Mochileiros das Galáxias.
                    </p>
               </div>
               <div className="pdf-content">
                   <h1>Para obter mais detalhes baixe currículo em pdf</h1>
                   <p>Baixar pdf</p>
               </div>
            </div>

        </div>
    )
}