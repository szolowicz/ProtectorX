const Discord = require("discord.js")
const Event = require(`../Structures/Event.js`)

module.exports = new Event("messageDelete", (client, message) => {
  const LogChannel = client.channels.cache.find(c => c.name === "âð¤âbot-test")
  const DeletedLog = new Discord.MessageEmbed()
  
  if (!LogChannel || message.author.bot)
    return
  
  DeletedLog.setTitle("`âï¸ðï¸ Deleted Message`")
    .setColor("RANDOM")
    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
    .addFields(
      {
        name: "ð Deleted by",
        value: `${message.author} **|** \`ID : ${message.author.id}\``,
        inline: false
      },
      {
        name: "ð On the channel",
        value: `${message.channel.name} **|** \`ID : ${message.channel.id}\``,
        inline: false
      },
      {
        name: "ð Deleted message",
        value: message.content,
        inline: false
      }
    )
    .setTimestamp()
  
  LogChannel.send({ embeds: [DeletedLog] })
})