const Discord = require("discord.js")
const Event = require(`../Structures/Event.js`)

module.exports = new Event("guildMemberAdd", (client, member) => {
  const channel = member.guild.channels.cache.find(c => c.name === "║🤖║bot-test")
  const embed = new Discord.MessageEmbed()

  if (!channel)
    return

  embed.setTitle("`❎👋 New Member`")
    .setColor("GREEN")
    .setAuthor(member.user.tag)
    .setThumbnail(member.user.avatarURL({ dynamic: true }))
    .addFields(
      {
        name: "👀 Account Created",
        value: `\`⏰ ${member.user.createdAt.toUTCString()}\``,
        inline: false
      },
      {
        name: "👀 User Joined",
        value: `\`⏰ ${member.joinedAt.toUTCString()}\``,
        inline: false
      }
    )
    .setTimestamp(member.joinedTimestamp)
  
  channel.send({ embeds: [embed] })
})