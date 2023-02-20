import './navbar.scss'
import { Link } from 'react-router-dom'
// Function react qui retourne un composant de barre de navigation.
export default function Navbar() {
// Utilisation de window.location.pathnanme pour récuper l'emplacement actuel de l'url.
    const currentRoute = window.location.pathname;

    return (
// Class CSS
// link est un composant de react router, il a un propriété qui définit la destination de chaque lien de navigation.
    <nav className='NavBar'>
        <ul className='Nav'>
        <li className={currentRoute === '/Kasa/' ? 'Nav_item_active' : 'Nav_item'}>
            <Link  to='/Kasa/'>
                Accueil
            </Link>
            </li>
            <li className={currentRoute === '/about' ? 'Nav_item_active' : 'Nav_item'}>
            <Link  to='/about'>
                A propos
            </Link>
                </li>
            </ul>
        </nav>
    )
    }