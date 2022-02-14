import React from 'react'
import '../style/Projects.scss'
import { Header } from '../components/Header'

export function Projects() {
    return (
        <div id="Project">
            <div className="header-content-project">
                <Header/>
            </div>
            <div className="principal-content-project">
                <div className="project-content">
                    <h1>GitHub</h1>
                    <a href='https://github.com/Gabriel-Aparecido03'>Clique aqui para acessar.</a>
                </div>
                <div className="project-content">
                    <h1>Letmeask(desenvolvido junto com a Rockeseat)</h1>
                    <a href='https://letmeask-66b5f.web.app'>Clique aqui para acessar.</a>
                </div>
            </div>
        </div>
    )
}