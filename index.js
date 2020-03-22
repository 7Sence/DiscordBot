const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", () => {
    bot.user.setActivity("with Dad | Type .help for help", {
        type: "PLAYING"
    })
})

bot.on("message", (message) => {
    //Easy access infomation

    var admins = ["Alan32#6283"/*Alan*/, "wyskiski#6782"/*Winona*/,"wyskiski#7152"/*Ryan*/];//Admins


    user = "69";
    if (message.member.user.tag != "fasdsadfname#6772") {
        user = message.member.user.tag;
    }

    user = user.toString();
    if (user != "69" && user != "fasdsadfname#6772") { //Checking for errors by making sure use is not equal to none
        var userMessage = message.content.toLowerCase();
        console.log(message.member.user.tag + ": " + userMessage);

        //Random number between 1 and 7
        var chooseMessage = Math.floor((Math.random() * 16) + 1);
        var randomImage = Math.floor((Math.random() * 9) + 1);
        


        //Ping?
        if (userMessage == "ping") {
            message.channel.send("Pong!");
        }

        //Help command
        if (userMessage == ".help") {
            message.channel.send("\n **Use . to execute commands, use ; to execute gifs Commands:** \n **.help** - List of commands, \n **Spatula** - Returns picture of spatula, \n **help** - Try it yourself, \n **Echo** [Message]- Any wrting after echo will be repeated, \n **.gif list** - For list of gifs, \n **.clearchat** - Clears chat [Admins Only] \n **.amiadmin** - Checks if your admin \n **.botavatar set** [image link] - Changes bot avatar");
        }

        //Insults
        if (user == "ɢᴇɴᴇʀᴀʟ ᴘ0ᴇ#1122") {
            if (chooseMessage == "1") {
                message.reply("That's cool but, did you know you're GAY.");
            }
        }

        if (user == "wyskiski#6782") {
            if (chooseMessage == "1") {
                message.reply("eats rice with her KFC");
            } else if (chooseMessage == "2") {
                message.reply("is a square a quadrilateral?");
            }
        }

        if (user == "wyskiski#7152") { //Sends message when ryan says vowel
            if (chooseMessage == "3" || chooseMessage == "4") {
                if (userMessage.includes("a") || userMessage.includes("e") || userMessage.includes("i") || userMessage.includes("o") || userMessage.includes("u")) {
                    message.reply("is going to stab you!");
                }
            }
        }

        if (user == "kategibbo5#6578") { //Tells Kate to shut up when she talks to dad bot
            if (userMessage.includes("hi") && userMessage.includes("kate") && userMessage.includes("dad")) {
                message.reply("S h u t.");
            }
        }

        /*
        if (user == "wyskiski#5022") { //Tells Winonas bot insults
            if (chooseMessage == "3" || chooseMessage == "4") {
                message.reply("Trash, partially working bot, Can't even do commands properly.");
            }
            if (chooseMessage == "2" || chooseMessage == "5") {
                message.reply("Winona's bot steals my code.");
            }
        }*/


        //Help joke
        if (userMessage == "help") {
            message.channel.send("you are a strong independant woman, you dont need help.");
        }

        //Tells Jaiden "Fair enough"
        if (user == "sky quake05#3102") {
            message.channel.send("Fair enough.");
        }

        //Swear joke
        if (userMessage.includes("shut") && userMessage.includes("up") && user != "fasdsadfname#6772") {
            message.reply("We do not tolorate the words " + userMessage + ", being said here.");
        }


        //Spatula inside joke
        if (userMessage == "spatula"){
            message.channel.send("Spatula!", {
                files: ["./DiscordBotPhotos/Spatchula" + randomImage + ".jpg"]
            });
        }

        if (user == "Dad Bot#2189") { //Ayy Dad
            if (chooseMessage == "3" || chooseMessage == "4") {
                message.reply("Ayyy, DAD!");
            }
        }
        //Echo
        if (userMessage.includes("echo ")) { //Repeats writing after echo
            userMessage = userMessage.replace("echo ", "");
            message.channel.send(userMessage);
        }

        // Send the user's avatar URL
        if (userMessage === '.avatar') {
            message.reply(message.author.displayAvatarURL());
        }


        //GifList
        if (userMessage == '.gif list' || userMessage == '.giflist' || userMessage == ';help') {
            message.channel.send("\nList of gifs - \n ;thinkspin \n ;lsd \n ;nice \n ;wtf \n ;bongocat \n ;bi \n");
        }

        //Gifs
        if (userMessage == ';thinkspin') {
            message.channel.send("", {
                files: ["" + "./DiscordBotPhotos/ThinkingSpin.gif"]
            });
        }

        if (userMessage == ';lsd') {
            message.channel.send("", {
                files: ["" + "./DiscordBotPhotos/LSD.gif"]
            });
        }

        if (userMessage == ';nice') {
            message.channel.send("", {
                files: ["" + "./DiscordBotPhotos/Nice.gif"]
            });
        }

        if (userMessage == ';wtf') {
            message.channel.send("", {
                files: ["" + "./DiscordBotPhotos/wtf.gif"]
            });
        }

        if (userMessage == ';bongocat') {
            message.channel.send("", {
                files: ["" + "./DiscordBotPhotos/BongoCat.gif"]
            });
        }

        if (userMessage == ';bi') {
            message.channel.send("", {
                files: ["" + "./DiscordBotPhotos/bi.jpg"]
            });
        }

        //Change bots avatar
        if (userMessage.includes(".botavatar set")) {
            userMessage = userMessage.replace(".botavatar set", "");
            bot.user.setAvatar(userMessage);
            message.reply("Done, My take a minute to change, don't spam. If avatar does not change in a bit, make sure you typed the URL properly.");
        }

        if (userMessage == '.clearchat' || userMessage == '.cls') {
            if (admins.indexOf(user) > -1) {
                message.channel.send("\n‏‏‎ ‎‎".repeat(200));
            } else {
                message.reply("**You dont have permission to run this command**");
            }
        }

        if (userMessage == '.amiadmin') {
            if (admins.indexOf(user) > -1) {
                message.reply("Ayy, your Admin! Nice‎");
            } else {
                message.reply("Lol imagine not being admin");
            }
        }
    }
});

//bot.login("Njg5NzgxOTUxMjgwMDU0MzI4.XnH4WA.kJleDUSPQ4XxUNpuTcY8maTwkSA");//Bot login Caitlin
bot.login("Njg5MzkwOTY0MzgwNTMyNzQz.XnbgyA.xnj_A9UoQJlLLs3j6S7OIkfGplU"); //Bot login