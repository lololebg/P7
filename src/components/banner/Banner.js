import './banner.scss'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

// Composant de la bannière
function Banner() {
// On déclare les états "aboutPage" et "About" pour savoir si on se trouve sur la page "About".
const [about, About] = useState(false)
// On utilise la fonction "useLocation" de "react-router-dom" pour obtenir l'emplacement actuel de l'application.
const location = useLocation()

// Utilisation de useEffect pour permettre de définir une logique qui s'exécute lorsque le composant est rendu dans le DOM.
useEffect(() => {
if (location.pathname === '/about') {
About(true)
}}, [])

//Enfin "return" définit la vue du composant. La classe HTML sera "banner_about" si "about" est "true", sinon elle sera "banner". 
//Si "about" est "false", le composant affichera également le texte "Chez vous, partout et ailleurs".
return (
<section className={about ? 'banner_about' : 'banner'}>
{!about && <p>Chez vous, partout et ailleurs</p>}
</section>
)
}

export default Banner



