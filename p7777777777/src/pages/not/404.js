import './404.scss'
import Header from "../../components/header/Header";
import { Link } from 'react-router-dom';

export default function NotFound() {
	return (
		<div className='not'>
			<Header />
			<div className="not_description">
				<h1 className='not_description_title'>404</h1>
				<p className='not_description_content'>La page que vous recherchez n'existe pas.</p>
			</div>
				<Link className='not_description_return' to='/Kasa'>Retourner sur la page d'accueil</Link>
		</div>
	)


	}



  