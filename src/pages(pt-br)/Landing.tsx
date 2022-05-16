import React,{useState} from 'react'
import { SideBar } from '../components/utils/SideBar/SideBar'

import { Intro } from '../components/sections/intro/Intro'
import { AboutMe } from '../components/sections/about-me/AboutMe'
import { Project } from '../components/sections/projects/Projects'
import { ContactMe } from '../components/sections/contact-me/ContactMe'
import { SideLinkEmail } from '../components/utils/sideLinkEmail/SideLinkEmail'

import { motion } from 'framer-motion'
export function LandingPtBr() {
    return (
        <div id="Landing">
            <SideBar/>
            <Intro/>
            <AboutMe/>
            <Project/>
            <ContactMe/>
            <SideLinkEmail/>
        </div>
    )
}