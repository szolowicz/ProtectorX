const Discord = require("discord.js")
const Event = require(`../Structures/Event.js`)

module.exports = new Event("guildMemberRemove", (client, member) => {
  const channel = member.guild.channels.cache.find(c => c.name === "âð¤âbot-test")
  const embed = new Discord.MessageEmbed()

  if (!channel)
    return

  embed.setTitle("`âð Member Left`")
    .setColor("RED")
    .setAuthor(member.user.tag)
    .setThumbnail(member.user.avatarURL({ dynamic: true }))
    .addField("ð User Joined", `\`â° ${member.joinedAt.toUTCString()}\``)
    .setTimestamp()
  
  channel.send({ embeds: [embed] })
})