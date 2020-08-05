
import { ConnectionService } from 'ng-connection-service';

export class BaseComponent {

    private connection;

    constructor() {
        this.connection = new ConnectionService();
        // check internet connection
        this.connection.monitor().subscribe(this.connectionStatusChanged);
    }

    storageChanged(event: StorageEvent) {
        console.log('changed key : '+event.key);
        console.log(event.newValue);        
    }

    connectionStatusChanged(status: boolean){
        // TODO display some alert message
        if(status == false) alert(`Your internet connection disconnected`);
    }
    logSomething(){
        console.log(`log from base component ------------------ `);
    }
}