import React,{useState} from 'react'
import {useNavigate } from 'react-router-dom'
import hbo from '../assets/images/hbo-max.png'
import  '../style/Landing.scss'
import perfilPhoto from '../assets/images/perfil-photo.svg'
import {Topbar} from '../components/Topbar'
import { BsInstagram,BsLinkedin,BsGithub } from 'react-icons/bs'
import { AiOutlineTwitter,AiOutlineCaretDown } from 'react-icons/ai'

export function LandingPtBr() {
    return (
        <div id="Landing">
            <Topbar/>
            <div className="intro-content">
                <div className="text-content">
                    <h4>Gabriel Aparecido da Silva</h4>
                    <h2>Ênfase por tecnologias web &amp; mobile</h2>
                    <h3>Desde dos meus 16 anos tenho estudado por conta própria,de forma auditada e fazendo projetos.E atualmente estou cursando Análise e Desenvolvimento de Sitemas na Facens.</h3>
                    <div className="link-content">
                        <p><span><a href="https://drive.google.com/drive/folders/1U8ferx0JvECt6sON2gqP4TRGYGpVkF32?usp=sharing" >Ver Currículo</a></span> ou <span><a href="https://www.linkedin.com/in/gabriel-aparecido-da-silva-a85099228/">Ver Linkedin</a></span></p>
                    </div>
                    <div className="button-content">
                        <AiOutlineCaretDown/>
                    </div>
                </div>
                <div className="image-content">
                    <img src={perfilPhoto} alt="foto de perfil Gabriel Aparecido" />
                </div>
            </div>
            <div className="about-me-content">
                <div className="text-content">
                    <h4>Sobre Mim</h4>
                    <h2>Busco por oportunidades na área de tecnologia.Atualmente estou cursando Análise e Desenvolvimento na Facens (2022).</h2>
                    <h3>Amo o sentimento de desafio.Não sou uma pessoa de recuar ao um bom desafio.Sempre busco cada vez me tornar mais resiliente e paciente.</h3>
                </div>
                <div className="skills-content">
                    <div className="skill-content">
                        <h2>Tecnologias que mais uso</h2>
                            <p>Javascript <span>/</span> HTML <span>/</span> CSS <span>/</span> React <span>/</span> React Native <span>/</span> NodeJs <span>/</span>Git <span>/</span> Github <span>/</span> Firebase</p>
                    </div>
                    <div className="skill-content">
                        <h2>Tecnologias que já usei</h2>
                            <p>Python <span>/</span> MySql </p>
                    </div>
                    <div className="skill-content">
                        <h2>Idiomas</h2>
                        <p>Inglês(intermediário - avançado) <span>/</span> Alemão (básico) <span>/</span> Espanhol (básico)</p>
                    </div>
                </div>
            </div>
            <div className="projects-content">
                <h1 className='title'>Projetos</h1>
                <div className="projects-grid">

                    <div className="project">
                        <h1>AnyDoubted</h1>
                        <p>É um projeto para a criação de salas de bate papo online. </p>
                        <div className="buttons-content">
                            <button className='view-github'><a href="https://github.com/Gabriel-Aparecido03/AnyDoubted">Ver no Github</a></button>
                        </div>
                    </div>

                    <div className="project">
                        <h1>GetEducators</h1>
                        <p>É um projeto para a alunos achar professores particulares.</p>
                        <div className="buttons-content">
                            <button className='view-github'><a href="https://github.com/Gabriel-Aparecido03/GetEducators">Ver no Github</a></button>
                        </div>
                    </div>

                    <div className="project">
                        <h1>LetsMove</h1>
                        <p>É um projeto para pessoas que passam muito tempo no computador,propondo exércios. </p>
                        <div className="buttons-content">
                            <button className='view-github'><a href="https://github.com/Gabriel-Aparecido03/LetsMove">Ver no Github</a></button>
                        </div>
                    </div>

                    <div className="project">
                        <h1>Todo List React</h1>
                        <p>Um projeto para aprender user React.</p>
                        <div className="buttons-content">
                            <button className='view-github'><a href="https://github.com/Gabriel-Aparecido03/Simple-Todo-React">Ver no Github</a></button>
                        </div>
                    </div>

                    <div className="project">
                        <h1>Copy HBO Max</h1>
                        <p>Um projeto para melhorar minhas habilidades de HTML e CSS .</p>
                        <div className="buttons-content">
                            <button className='view-github'><a href="https://github.com/Gabriel-Aparecido03/Clone-HBOMAX">Ver no Github</a></button>
                        </div>
                    </div>

                    <div className="project">
                        <h1>Copy Nubank</h1>
                        <p>Um projeto para melhorar minhas habilidades de HTML e CSS .</p>
                        <div className="buttons-content">
                            <button className='view-github'><a href="https://github.com/Gabriel-Aparecido03/CopyStyleNubank">Ver no Github</a></button>
                        </div>
                    </div>
                    
                    <div className="project">
                        <h1>Letmeask(feito c/ Rocketseat)</h1>
                        <p>Um projeto feito junto com a rocketseat. .</p>
                        <div className="buttons-content">
                            <button className='view-github'><a href="https://letmeask-66b5f.web.app">Ver site</a></button>
                        </div>
                    </div>

                    <div className="project">
                        <h1>Projeto de Semáforo com Arduino.</h1>
                        <p>Um projeto simples de arduino com a ideia de fazer um semáforo de cruzamento,feito em grupo.</p>
                        <div className="buttons-content">
                            <button className='view-github'><a href="https://youtu.be/LtzjSG1ToFA">Ver no Youtube</a></button>
                        </div>
                    </div>

                </div>
            </div>
            <div className="contact-content">
                <h1 className='title'>Entre em contato</h1>
                <div className="social-medias-content">
                    <div className="social-media-content">
                        <a style={{color:'white'}} href='https://www.linkedin.com/in/gabriel-aparecido-da-silva-a85099228/'><BsLinkedin/></a>
                    </div>
                    <div className="social-media-content">
                        <a style={{color:'white'}}  href='https://www.instagram.com/__gabriel.ap/'><BsInstagram/></a>
                    </div>
                    <div className="social-media-content">
                        <a style={{color:'white'}}  href='https://www.instagram.com/__gabriel.ap/'><AiOutlineTwitter/></a>
                    </div>
                    <div className="social-media-content">
                        <a style={{color:'white'}}  href='https://github.com/Gabriel-Aparecido03'><BsGithub/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}