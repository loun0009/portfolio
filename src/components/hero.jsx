import React from 'react'
import { motion } from 'framer-motion'


function Hero() {
    return (
        <section className="min-h-[70vh] flex items-center">
            <div className="max-w-4xl mx-auto px-4">
                <motion.h1 initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.6}} className="text-4xl font-extrabold">
                    Salut — je suis Enzo Loungoundji
                </motion.h1>
                <p className="mt-4 text-lg">Étudiant en développement web • React, PHP, CSS moderne</p>
                <div className="mt-6">
                    <a href="#projects" className="inline-block px-4 py-2 rounded bg-slate-900 text-white">Voir mes projets</a>
                </div>
            </div>
        </section>
    )
}


export default Hero