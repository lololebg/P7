import './card.scss'
import { Link } from 'react-router-dom'

//Ce code définit une fonction composant React "Card"
 function Card(props) {
	const { id, title, cover } = props;
//Cela prend en entrée des propriétés "id", "title" et "cover". 
//Il retourne ensuite un lien vers un logement spécifique avec une image de couverture et un titre associé. La destination du lien est déterminée par l'URL "accomodation/{id}".
	return (
		<Link to={`/logement/${id}`} className="Card">
			<img src={cover} alt={title} />
			<h3>{title}</h3>	
		</Link>
	)
}

export default Card


