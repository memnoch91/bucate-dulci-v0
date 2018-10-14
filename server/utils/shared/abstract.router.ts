import { Router } from 'express';

export abstract class AbstractRouter {
	protected router:Router;

	constructor(router:Router) {
		this.router = router;
		this.initRoutes();
	}

	protected abstract initRoutes():any;
}