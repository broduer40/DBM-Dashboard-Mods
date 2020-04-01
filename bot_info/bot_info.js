module.exports = {
    run: (DBM, req, res, Dashboard) => {
         switch(req.body.option) {
            case "0":
                // Bot Ping
                return `Bot Ping: ${DBM.Bot.bot.ping}` // added by Great Plains Modding
                break;
            case "1":
                // Guild Count
                return `Guild Count: ${DBM.Bot.bot.guilds.array().length}` // added my Zoom
                break;
            case "2":
                // Bot Channel Count
                return `Channel Count: ${DBM.Bot.bot.channels.size}` // Added by Zoom
                break;
            case "3":
                // Ready At
                return `Ready At: ${DBM.Bot.bot.readyAt}` // Added by Zoom
                break;
         }
    }
};
