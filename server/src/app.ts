//chrome://inspect

import * as Express from 'express';
import * as BodyParser from 'body-parser';
import * as Mongoose from 'mongoose';

import { config } from './config';
import { databaseService } from '../utils/database.service';
import { routerService } from '../utils/router.service';

class App {
    public app:Express.Application;

    private database:Mongoose.Connection;

    constructor() {
        this.init();
    }

    private init() {
        this.startDatabase();
        this.startServer();
    }

    private startDatabase() {
        this.database = Mongoose.createConnection(config.database.url, { useNewUrlParser: true});
        databaseService.setConnection(this.database);

        this.database.on('connected', () => {
            console.log(`Database started for ${config.database.url}`);
        });
    }

    private startServer() {
        this.app = Express();

        this.app.use(BodyParser.json({limit: '20mb' }));
        this.app.use((request, response, next) => {
            response.header('Access-Control-Allow-Origin', "*");
            response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
            response.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');

            next();
        });
        routerService.setApplication(this.app);

        this.app.listen(config.server, (error:any) => {
            const currentTime = new Date
            console.log(error || currentTime.toUTCString());
            console.log(`Listening on port ${config.server.port}`);
        });
    }
}

export default new App().app;