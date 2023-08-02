import Link from 'next/link';
import React from 'react';
import '../public/styles.css'

const NavBar = ({ active }) => {
    return (
        <div className="nav-container">
            <nav className="navbar">
                <div className="nav-background bg">
                    <ul className="nav-list">
                        <li className={active === 'home' ? 'nav-item active' : 'nav-item'}>
                            <Link href="/">Accueil</Link>
                        </li>
                        <li className={active === 'about' ? 'nav-item active' : 'nav-item'}>
                            <Link href="/about">À propos</Link>
                        </li>
                        <li className={active === 'projects' ? 'nav-item active' : 'nav-item'}>
                            <Link href="/projects">Projets</Link>
                        </li>
                        <li className={active === 'contact' ? 'nav-item active' : 'nav-item'}>
                            <Link href="/contact">Contact</Link>
                        </li>
                        <li className={active === 'review' ? 'nav-item active' : 'nav-item'}>
                            <Link href="/review">Review</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
