class Handler {
    constructor(client, message, args) {
        this.client = client;
        this.message = message;
        this.args = args;
    }

    throwError(error) {
        if(error) {
            console.log(error)
        }

        this.message.channel.send({
            embed: {
                color: 13959168,
                title: "Client returned error",
                description: `${error}`
            }
        });
    }
}