const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('qstan is online!');
})

client.on('guildMemberAdd', member=>{
    const channel = member.guild.channels.cache.find(channel => channel.name === "join-logs")
    const targetchannelid = '758307200845217793'
    if(member.user.bot){ return;}
    else{
        if(!channel) {return;}
        else{
        channel.send(`Welcome to Indradhanu IITD server ${member}, We are glad to have you here.\nplease visit ${member.guild.channels.cache.get(targetchannelid).toString()}`);
        let role = member.guild.roles.cache.some(r => r.name === "member");
        member.roles.add(role);        
        }
    }
})

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }
    if(command === 'delete'){
        client.commands.get('delete').execute(message, args);
    }
    if(command === 'addteam'){
        client.commands.get('addteam').execute(message, args);
    }
})



client.login(process.env.token);