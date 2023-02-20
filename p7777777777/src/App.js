
import Home from './pages/home/Home';
import About from './pages/about/About';
import NotFound from './pages/not/404';
import Logement from './pages/logement/Logement';


import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: "/Kasa/",
		element: <Home />
	},
	{
		path: "/logement/:id",
		element: <Logement />
	},
	{
		path: '/about',
		element: <About />
	},{
		path: '*',
		element: <NotFound />
	},
]);

function App() {
	return (
		<>
			<RouterProvider router={router}/>
		</>
	);
}

export default App;
