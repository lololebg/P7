
import Home from './pages/home/Home';
import About from './pages/about/About';
import NotFound from './pages/not/404';
import Logement from './pages/logement/Logement';
import Error from './pages/error/Error';

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
		path: "/error/:id",
		element: <Error />
	},
	{
		path: '/about',
		element: <About />
	},{
		path: '/404/:id',
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
