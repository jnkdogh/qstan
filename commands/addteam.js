module.exports = {
    name: 'addteam', 
    description: "adding member to team!",
    execute(message, args){
        let role1 = message.guild.roles.cache.some(r => r.name === "member");
        let role2 = message.guild.roles.cache.some(r => r.name === "Team");
        if(!message.member.roles.cache.some(r => r.name === "member")){
            mention = message.mentions.members.first();
            if(!mention){
                message.reply('please mention someone!');
            }
            else{
                if(!mention.roles.cache.some(r => r.name === "member")){
                    message.channel.send('Already on the team!');
                }
                else{
                    mention.roles.add(role2);
                    mention.roles.remove(role1);
                }
            }
        }        
    }
}