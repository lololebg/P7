import './footer.scss'
import logo from '../../assets/footer.png'
// fonction React qui retourne un composant de pied de page pour une application web

export default function Footer() {
	return (
//La fonction retourne un élément footer avec une classe CSS pour styliser le pied de page.
		<footer className='footer'>
			<img src={logo} alt="Kasa - agence de location d'appartements entre particuliers" />
			<p className='footer_copyright'>© 2020 Kasa. All rights reserved</p>
		</footer>
	)
}




