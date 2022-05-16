import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { GiTinker } from "react-icons/gi";

import Fade from 'react-reveal'

import react from '../../../assets/images/react.png'
import hbo from '../../../assets/images/Desktop - 2.svg'
import bank from '../../../assets/images/Desktop - 1(1).svg'
import java from '../../../assets/images/java.webp'
import arduino from '../../../assets/images/arduino.jpg'
import { FiFolder } from "react-icons/fi";

import './style.scss'

export function Project() {
    return (
        <div className="projects-content">
                <h1 className='title'>Projetos</h1>
                <h2>Algumas coisas que eu já fiz</h2>
                <Fade bottom cascade>
                <div className="projects-grid">

                    <Fade  left>
                        <div className="project">
                            <div className="text-content">
                                <h1>Respirador feito com Arduino</h1>
                                <p>Projeto desenvolvido com intenção de construir um respirador.</p>
                                <div className="used-resource">
                                    <p>C++</p>
                                    <p>Arduino</p>
                                </div>
                                <div className="links-content">
                                    <ul>
                                        <li><a href="https://www.linkedin.com/posts/gabriel-aparecido-da-silva-a85099228_github-arduino-facens-activity-6927610472137400320-jE8D?utm_source=linkedin_share&amp;utm_medium=member_desktop_web"><AiFillLinkedin/></a></li>
                                        <li><a href="https://www.tinkercad.com/things/hWXaoGopKOM"><GiTinker/></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="image-content">
                                <img src={arduino} alt="" />
                            </div>
                        </div>
                    </Fade>

                    <Fade  right>
                        <div className="project">
                            <div className="text-content">
                                <h1>Simulador de Banco feito com Java</h1>
                                <p>Projeto desenvolvido com o objetivo de melhorar as minhas habilidades em Java.</p>
                                <div className="used-resource">
                                    <p>Java</p>
                                </div>
                                <div className="links-content">
                                    <ul>
                                        <li>
                                            <a 
                                            href="https://www.linkedin.com/in/gabriel-aparecido-da-silva-a85099228/"
                                            >
                                                <AiFillLinkedin/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/Gabriel-Aparecido03/Java-bank-system">
                                                <BsGithub/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="image-content">
                                <img src={bank} alt="" />
                            </div>
                        </div>
                    </Fade>

                    <Fade  left>
                        <div className="project">
                            <div className="text-content">
                                <h1>Copia Landing Page HBO Max</h1>
                                <p>Tive a iniciativa de fazer esse projeto para melhorar as minhas habilidades em CSS.</p>
                                <div className="used-resource">
                                    <p>React + Sass</p>
                                </div>
                                <div className="links-content">
                                    <ul>
                                        <li>
                                            <a 
                                            href="https://www.linkedin.com/in/gabriel-aparecido-da-silva-a85099228/"
                                            >
                                                <AiFillLinkedin/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/Gabriel-Aparecido03/HBOCopy">
                                                <BsGithub/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="image-content">
                                <img src={hbo} alt="" />
                            </div>
                        </div>
                    </Fade>

                    <Fade  right>
                        <div className="project">
                            <div className="text-content">
                                <h1>Copia Landing Page HBO Max</h1>
                                <p>Tive a iniciativa de fazer esse projeto para melhorar as minhas habilidades em CSS.</p>
                                <div className="used-resource">
                                    <p>React + Sass</p>
                                </div>
                                <div className="links-content">
                                    <ul>
                                        <li>
                                            <a 
                                            href="https://www.linkedin.com/in/gabriel-aparecido-da-silva-a85099228/"
                                            >
                                                <AiFillLinkedin/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/Gabriel-Aparecido03/HBOCopy">
                                                <BsGithub/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="image-content">
                                <img src={react} alt="" />
                            </div>
                        </div>
                    </Fade>

                    <Fade  left>
                        <div className="project">
                            <div className="text-content">
                                <h1>Weather App</h1>
                                <p>Projeto clássico para entender como se usar uma API,fazendo requests para o servidor e também explorando mais framework de CSS.</p>
                                <div className="used-resource">
                                    <p>React + Axios + Tailwind CSS</p>
                                </div>
                                <div className="links-content">
                                    <ul>
                                        <li>
                                            <a 
                                            href="https://www.linkedin.com/in/gabriel-aparecido-da-silva-a85099228/"
                                            >
                                                <AiFillLinkedin/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/Gabriel-Aparecido03/Weather-app">
                                                <BsGithub/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="image-content">
                                <img src={react} alt="" />
                            </div>
                        </div>
                    </Fade>

                    <Fade  right>
                        <div className="project">
                            <div className="text-content">
                                <h1>Any Doubted</h1>
                                <p>Mais um projeto clássico para apliações me react,construir um chat onlune.</p>
                                <div className="used-resource">
                                    <p>React + Sass + Firebase</p>
                                </div>
                                <div className="links-content">
                                    <ul>
                                        <li>
                                            <a 
                                            href="https://www.linkedin.com/in/gabriel-aparecido-da-silva-a85099228/"
                                            >
                                                <AiFillLinkedin/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/Gabriel-Aparecido03/AnyDoubted">
                                                <BsGithub/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="image-content">
                                <img src={react} alt="" />
                            </div>
                        </div>
                    </Fade>

                    <Fade  left>
                        <div className="project">
                            <div className="text-content">
                                <h1>Todo List em React Native</h1>
                                <p>Projeto para iniciar meus estudos m React NAtive.</p>
                                <div className="used-resource">
                                    <p>React Native</p>
                                </div>
                                <div className="links-content">
                                    <ul>
                                        <li>
                                            <a 
                                            href="https://www.linkedin.com/in/gabriel-aparecido-da-silva-a85099228/"
                                            >
                                                <AiFillLinkedin/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/Gabriel-Aparecido03/Pomodoro-mobile">
                                                <BsGithub/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="image-content">
                                <img src={react} alt="" />
                            </div>
                        </div>
                    </Fade>

                    </div>
                </Fade>
               <div className="projects-folders">
                   <Fade bottom cascade>
                    <h1>Outros projetos</h1>
                    
                    <div className="project-folders-grid">

                        <Fade left>
                            <div className="folder">
                                <div className="top-content">
                                    <div className="folder-content">
                                        <FiFolder/>
                                    </div>
                                    <div className="links-content">
                                        <a href="https://www.tinkercad.com/things/i6kKh4WHf8v">
                                            <GiTinker />
                                        </a>
                                    </div>
                                </div>
                                <div className="text-content">
                                    <h1>Usando Buzzer para Tocar Asa Branca</h1>
                                    <p>Projeto simples feito para aprender a usar um buzzer em Arduino</p>
                                    <div className="tecn-list">
                                        <ul>
                                            <li>C++</li>
                                            <li>Arduino</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Fade>

                        <Fade right>
                            <div className="folder">
                                <div className="top-content">
                                    <div className="folder-content">
                                        <FiFolder/>
                                    </div>
                                    <div className="links-content">
                                        <a href="https://github.com/Gabriel-Aparecido03/CopyStyleNubank">
                                            <BsGithub />
                                        </a>
                                    </div>
                                </div>
                                <div className="text-content">
                                    <h1>Copia Landing Page Nubank</h1>
                                    <p>projeto feito para melhorar minhas habilidades em CSS e responsive</p>
                                    <div className="tecn-list">
                                        <ul>
                                            <li>React</li>
                                            <li>Sass</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Fade>

                        <Fade left>
                            <div className="folder">
                                <div className="top-content">
                                    <div className="folder-content">
                                        <FiFolder/>
                                    </div>
                                    <div className="links-content">
                                        <a href="https://github.com/Gabriel-Aparecido03/Simple-todo-ReactNative">
                                            <BsGithub />
                                        </a>
                                    </div>
                                </div>
                                <div className="text-content">
                                    <h1>Todo-list em React Native</h1>
                                    <p>Projeto simples feito para aprender o funcionamento do React Native</p>
                                    <div className="tecn-list">
                                        <ul>
                                            <li>React Native</li>
                                            <li>Styled Component</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Fade>

                       <Fade right>
                        <div className="folder">
                                <div className="top-content">
                                    <div className="folder-content">
                                        <FiFolder/>
                                    </div>
                                    <div className="links-content">
                                        <a href="https://github.com/Gabriel-Aparecido03/Java-Exercises">
                                            <BsGithub />
                                        </a>
                                    </div>
                                </div>
                                <div className="text-content">
                                    <h1>Vários mini-projetos em Java</h1>
                                    <p>Treinamento e entendo a linguagem Java</p>
                                    <div className="tecn-list">
                                        <ul>
                                            <li>Java</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                       </Fade>

                        <Fade left>
                            <div className="folder">
                                <div className="top-content">
                                    <div className="folder-content">
                                        <FiFolder/>
                                    </div>
                                    <div className="links-content">
                                        <a href="https://www.tinkercad.com/things/aaaidcsRpQc">
                                            <GiTinker />
                                        </a>
                                    </div>
                                </div>
                                <div className="text-content">
                                    <h1>Monitorar de intensidade de luminosidade.</h1>
                                    <p>Aprendendo mais coisas em Arduino</p>
                                    <div className="tecn-list">
                                        <ul>
                                            <li>C++</li>
                                            <li>Arduino</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Fade>

                        <Fade right>
                            <div className="folder">
                                <div className="top-content">
                                    <div className="folder-content">
                                        <FiFolder/>
                                    </div>
                                    <div className="links-content">
                                        <a href="https://www.tinkercad.com/things/3Bi2HIrOK2u">
                                            <GiTinker />
                                        </a>
                                    </div>
                                </div>
                                <div className="text-content">
                                    <h1>Simulação de um semáforo de cruzamento</h1>
                                    <p>Aprendendo mais coisas em Arduino</p>
                                    <div className="tecn-list">
                                        <ul>
                                            <li>C++</li>
                                            <li>Arduino</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                   </Fade>

               </div>     
            </div>
    )
}