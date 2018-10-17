import { Application } from 'express';

import { AdminRouter } from '../user/admin.router';
import { ImagesRouter } from '../images/img.router';

class RouterService {
	private app:Application;

	public setApplication(app:Application) {
		this.app = app;
		this.initRouters();
	}

	private initRouters() {
		new AdminRouter(this.app);
		new ImagesRouter(this.app)
	}
}

export const routerService:RouterService = new RouterService();