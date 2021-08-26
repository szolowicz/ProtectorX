const Discord = require("discord.js")
const Event = require(`../Structures/Event.js`)

module.exports = new Event("guildMemberRemove", (client, member) => {
  const channel = member.guild.channels.cache.find(c => c.name == "║🤖║bot-test")

  if (!channel) return

  const embed = new Discord.MessageEmbed()

  embed.setTitle("`❌👋 Member Left`")
    .setColor("RED")
    .setAuthor(member.user.tag)
    .setThumbnail(member.user.avatarURL({ dynamic: true }))
    .addField("👀 User Joined", `\`⏰ ${member.joinedAt.toUTCString()}\``)
    .setTimestamp()
  
  channel.send({ embeds: [embed] })
})