import './style.scss'
import { Fade } from 'react-reveal'
export function Intro() {
    return (
        <div className="intro-content">
                <div className="text-intro-content">
                    <div className="text-content">
                        <Fade bottom cascade>
                            <h3>Olá me chamo</h3>
                            <h1>Gabriel Aparecido</h1>
                            <h2>Entusiada e apaixonado por tecnologia</h2>
                            <p>Curso análise e desenvolvimento de sistemas na Facens. <span>Atualmente sou desenvolvedor front-end na Khanum consultoria em inovação</span> na area da tecnologia.Atualmente estou focado no Front end.</p>
                            <p>Tenho conhecimento em :</p>
                            <div className="my-skills-content">
                                <ul>
                                    <li>JavaScript</li>
                                    <li>React</li>
                                    <li>React Native</li>
                                    <li>Java</li>
                                    <li>Node</li>
                                    <li>Firebase</li>
                                </ul>
                            </div>
                        </Fade>
                    </div>
                    <Fade left>
                        <div className="button-intro-content">
                           <button>
                               <a href="https://drive.google.com/file/d/1IuyFk51udRZWIIY1qHTfScSAVT-QCxBp/view?usp=sharing">Baixar Curriculo</a>
                           </button>
                        </div>
                    </Fade>
                </div>
                
            </div>
    )
}