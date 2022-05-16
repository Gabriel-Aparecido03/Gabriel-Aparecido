
import perfilPhoto from '../../../assets/images/perfil-photo.svg'
import './style.scss'
import { Fade } from 'react-reveal'
export function AboutMe() {
    return (
        <div className="about-me-content">
                <div className="text-content">
                    <Fade left cascade>
                        <h4>Sobre Mim</h4>
                        <h2>" A única maneira de fazer um grande trabalho é amando o que se faz."</h2>
                        <p>Steve jobs</p>
                        <div className="my-history-content">
                            <div className="my-description-text">
                                <p>Comecei com 12 anos fazendo pequenos scripts em portugol, como por exemplo: fazer uma tabuada, verificar se o número é primo ou não e etc.Logo em seguida comecei a fazer jogos de plataforma utilizando Construct 2.</p>
                                <p>Porém o que me fez apaixonar pela programação foi o desafio,de a cada ter de me superar cada vez mais , tentar adicionar funcionalidades a mais, criar algoritmos mais complexos e etc.</p>
                                <p>Atualmente estou com 18 anos,curso Análise e Desenvolvimento de Sistemas na Facens.</p>
                            </div>
                            <div className="image-content">
                                <img src={perfilPhoto} alt="foto de perfil" />
                            </div>
                        </div>
                    </Fade>
                </div>
                
                
            </div>
    )
}