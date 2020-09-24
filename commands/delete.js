module.exports = {
    name: 'delete', 
    description: "bulk delete coomand!",
    execute(message, args){
        if(message.member.roles.cache.some(r => r.name === "Admin") || message.member.roles.cache.some(r => r.name === "Secy") || message.author.id===message.guild.owner.id){
            if(!args[0]){message.reply('you need to specify the number of msgs').then((message)=>{
                setTimeout(()=>{
                    message.delete()
                }, 5000)
            })
            message.delete();
            }else{
                message.delete();
                message.channel.bulkDelete(args[0]);
            }
            }
            else{
                message.reply("you do not have the permission for that!").then((message)=>{
                    setTimeout(()=>{
                        message.delete()
                    }, 5000)
                })
                message.delete();
            }        
    }
}