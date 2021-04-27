import logo from './logo.svg';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './Routes';
function App() {
	return (
		<div>
			<Router>
				<BaseRouter />
			</Router>
		</div>
	);
}

export default App;
