import { Connection } from 'mongoose';
import { Subscription } from 'rxjs';

import { databaseService } from '../database.service';

export abstract class AbstractManager {
    protected connection:Connection;
    private subscription:Subscription;

    constructor() {
        this.subscription = databaseService.connectionObservable.subscribe(this.init.bind(this));
    }

    protected abstract initModel():any;

    /**
     * Convenient method for automatic replay to fail or success functions.
     */
    protected replay(success:Function, fail:Function) {
        return (error:any, result:any) => {
			error ? fail(error) : success(result);
		}
    }

    /**
     * Start creating the model when the connection is created.
     */
    private init(connection:Connection) {
        this.connection = connection;
        this.initModel();
        this.unsubscribe();
    }

    /**
     * Unsubscribe the connection with the database observable.
     * It uses a timeout so that the subscription can be created before destroying,
     * in case of an instand BehaviourSubject
     */
    private unsubscribe() {
        setTimeout(() => {
            this.subscription && this.subscription.unsubscribe();
        })
    }
}