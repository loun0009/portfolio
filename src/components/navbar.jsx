import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <header className="sticky top-0 bg-white/80 backdrop-blur z-30">
            <nav className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
                <Link to="/" className="text-lg font-bold">MonPortfolio</Link>
                    <div className="space-x-4">
                        <Link to="#projects" className="hover:underline">Projets</Link>
                        <Link to="#skills" className="hover:underline">Compétences</Link>
                        <Link to="#contact" className="hover:underline">Contact</Link>
                    </div>
            </nav>
        </header>
    )
}


export default Navbar