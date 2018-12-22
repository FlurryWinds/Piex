const Handler = require("../lib/handler");

class Ping extends Handler {
    run() {
        this.message.channel.send("Calculating...").then(message => {
            this.message.channel.send(`:ping_pong: Pong! - ${messsage.createdTimestamp - this.message.createdTimestamp}ms`)
            message.delete();
        });
    };
}