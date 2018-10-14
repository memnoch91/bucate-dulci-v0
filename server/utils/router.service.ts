import { Application } from 'express';

import { AdminRouter } from '../user/admin.router';

class RouterService {
	private app:Application;

	public setApplication(app:Application) {
		this.app = app;
		this.initRouters();
	}

	private initRouters() {
		new AdminRouter(this.app);
	}
}

export const routerService:RouterService = new RouterService();