const Discord = require("discord.js")
const Event = require(`../Structures/Event.js`)

module.exports = new Event("messageDelete", (client, message) => {
  const LogChannel = client.channels.cache.find(c => c.name == "👀logiv2")
  
  if (!LogChannel || message.author.bot) return

  const DeletedLog = new Discord.MessageEmbed()
  
  DeletedLog.setTitle("`✖️🗑️ Deleted Message`")
    .setColor("RANDOM")
    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
    .addFields(
      {
        name: "👀 Deleted by",
        value: `${message.author} **|** \`ID : ${message.author.id}\``,
        inline: false
      },
      {
        name: "👀 On the channel",
        value: `${message.channel.name} **|** \`ID : ${message.channel.id}\``,
        inline: false
      },
      {
        name: "👀 Deleted message",
        value: message.content,
        inline: false
      }
    )
    .setTimestamp()
  
  LogChannel.send({ embeds: [DeletedLog] })
})