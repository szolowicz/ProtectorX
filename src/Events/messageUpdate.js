const Discord = require("discord.js")
const Event = require(`../Structures/Event.js`)

module.exports = new Event("messageUpdate", async(client, oldMessage, newMessage) => {
  const LogChannel = client.channels.cache.find(c => c.name === "âð¤âbot-test")
  const EditedLog = new Discord.MessageEmbed()

  if (!LogChannel || oldMessage.author.bot || newMessage.author.bot)
    return
  
  EditedLog.setTitle("`âï¸ð Edited Message`")
    .setColor("RANDOM")
    .setThumbnail(oldMessage.author.displayAvatarURL({dynamic: true}))
    .addFields(
      {
        name: "ð Edited by",
        value: `${oldMessage.author} **|** \`ID : ${oldMessage.author.id}\``,
        inline: false
      },
      {
        name: "ð On the channel",
        value: `${oldMessage.channel.name} **|** \`ID : ${oldMessage.channel.id}\``,
        inline: false
      },
      {
        name: "ð Old message",
        value: oldMessage.content,
        inline: false
      },
      {
        name: "ð New message",
        value: newMessage.content,
        inline: false
      }
    )
    .setTimestamp()
  
  LogChannel.send({ embeds: [EditedLog] })
})