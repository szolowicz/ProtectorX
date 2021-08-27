const Discord = require("discord.js")
const Event = require(`../Structures/Event.js`)

module.exports = new Event("messageUpdate", async(client, oldMessage, newMessage) => {
  const LogChannel = client.channels.cache.find(c => c.name == "║🤖║bot-test")
  
  if (!LogChannel) return

  const EditedLog = new Discord.MessageEmbed()
  
  EditedLog.setTitle("`✖️📝 Edited Message`")
    .setColor("RANDOM")
    .setThumbnail(oldMessage.author.displayAvatarURL({dynamic: true}))
    .addFields(
      {
        name: "👀 Edited by",
        value: `${oldMessage.author} **|** \`ID : ${oldMessage.author.id}\``,
        inline: false
      },
      {
        name: "👀 On the channel",
        value: `${oldMessage.channel.name} **|** \`ID : ${oldMessage.channel.id}\``,
        inline: false
      },
      {
        name: "👀 Old message",
        value: oldMessage.content,
        inline: false
      },
      {
        name: "👀 New message",
        value: newMessage.content,
        inline: false
      }
    )
    .setTimestamp()
  
  LogChannel.send({ embeds: [EditedLog] })
})