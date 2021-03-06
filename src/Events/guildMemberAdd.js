const Discord = require("discord.js")
const Event = require(`../Structures/Event.js`)

module.exports = new Event("guildMemberAdd", (client, member) => {
  const channel = member.guild.channels.cache.find(c => c.name === "âð¤âbot-test")
  const embed = new Discord.MessageEmbed()

  if (!channel)
    return

  embed.setTitle("`âð New Member`")
    .setColor("GREEN")
    .setAuthor(member.user.tag)
    .setThumbnail(member.user.avatarURL({ dynamic: true }))
    .addFields(
      {
        name: "ð Account Created",
        value: `\`â° ${member.user.createdAt.toUTCString()}\``,
        inline: false
      },
      {
        name: "ð User Joined",
        value: `\`â° ${member.joinedAt.toUTCString()}\``,
        inline: false
      }
    )
    .setTimestamp(member.joinedTimestamp)
  
  channel.send({ embeds: [embed] })
})