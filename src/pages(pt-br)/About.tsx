import React from 'react'

import { ButtonBack } from '../components/ButtonBack'
import jsPDF from 'jspdf'
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
                    <h1>Ênfase por Tecnologias Web &amp; Mobile</h1>
               </div>
               <div className="about-text-content">
                   <h1>Sobre mim</h1>
                   <h3>Me chamo Gabriel Aparecido,tenho 18 anos.Moro em Sorocaba,interior de São Paulo.Sou um entusiasta de tecnologias web &amp; mobile.</h3>
                    <p>
                        <br/>
                        No meu dia a dia gosto de usar tecnologias como:Typescript,ReactJS,Firebase,React Native e Sass.
                    </p>
                    <p>
                        <br/>
                        Comecei a estudar programação com 12 anos,aprendendo lógica de programação e algoritmo em VisualAlg,depois fiz projetos simples no Scratch e também fazendo jogos simples no Construct 2.Porém com meus 14 anos decidi focar no vestibular,e desse modo deixando de lado a área da programação.Porém no ano de 2019,voltei a estuda tecnologia.
                    </p>
                    <p>
                        <br/>
                        Amo o sentimento de desafio.Não sou uma pessoa de recuar ao um bom desafio,por tal motivo sempre busco por projetos que possam ser úteis e que gerem dificultades.Sempre busco cada vez me tornar mais resiliente e paciente.
                    </p>
                    <p>
                    <br/>
                        Conhecimentos:<br/>
                        <br/>
                        
                        Inglês - avançado <br/>
                        Alemão - básico <br/>
                        Javascript - intermediário <br/>
                        Css - intermediário <br/>
                        Html - intermediário <br/>
                        React - intermediário <br/>
                        React Native - básico <br/>
                        Firebase - básico <br/>
                        MySql - básico <br/>
                    </p>    
               </div>
               <div className="pdf-content">
                   <h1>Para obter mais detalhes baixe currículo em pdf</h1>
                   <a href='https://drive.google.com/file/d/1JQs4s2yHrWD4psnbXseiVnl6FVIOgyxD/view?usp=sharing' target={'_blank'} download={'true'}>Ver Currículo pdf</a>
               </div>
            </div>

        </div>
    )
}