import React from 'react'
import { motion } from 'framer-motion'
import './style.scss'
import { Fade } from 'react-reveal'
export function SideLinkEmail() {
    return (
        <div id="SideLinkEmail">
            <motion.div 
            className="email-content"
            whileHover={{
                y:10,
                transition: {duration:.4,delay:.1}
            }}
            animate={{}}
            >
                <Fade right>
                    <a href="mailto:gabriel.aparecido.silva03@gmail.com">gabriel.aparecido.silva03@gmail.com</a>
                <hr /></Fade>
            </motion.div>
        </div>
    )
}