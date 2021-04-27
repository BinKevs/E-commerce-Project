import { Route, Switch } from 'react-router-dom';
import TestRender from './components/Test-Render';
const BaseRouter = () => (
	<div>
		<Switch>
			<Route exact path="/" component={TestRender} />
		</Switch>
	</div>
);

export default BaseRouter;
