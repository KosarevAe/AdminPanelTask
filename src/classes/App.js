'use strict';

class App {
    constructor(server, dbDriver) {
        this.server = server;
        this.databaseDriver = null;

        this.init().catch(console.error);
    }

    getAppPort() {
        return process.env.APP_PORT;
    }

    async start() {

    }
}

module.exports = { App };