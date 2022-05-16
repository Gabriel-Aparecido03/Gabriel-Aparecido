import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

import './style.scss'

export function ContactMe() {
    return (
        <div className="contact-content">
                <div className="text-content">
                    <h1>Entre em contato !</h1>
                    <p>Se você tiver alguma oportunidade para me oferecer ou tiver qualquer dúvida,estou disponível.</p>
                    <div className="button-container">
                        <button><a href="mailto:gabriel.aparecido.silva03@gmail.com">Mandar email</a></button>
                    </div>
                </div>
                <footer>
                    <div className="social-medias-content">
                        <ul>
                            <li>
                                <a href="https://github.com/Gabriel-Aparecido03"><BsGithub/></a>
                            </li>
                            <li>
                            <a href="https://www.instagram.com/gaabriel_ap/"><BsInstagram/></a>
                            </li>
                            <li>
                            <a href="https://www.linkedin.com/in/gabriel-aparecido-da-silva-a85099228/"><BsLinkedin/></a>
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>
    )
}