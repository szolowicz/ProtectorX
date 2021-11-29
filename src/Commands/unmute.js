const Command = require(`../Structures/Command.js`)

module.exports = new Command({
  name: "unmute",
  description: "Unmute members from server!",
  permission: "MANAGE_MESSAGES",

  async run(message, args, client) {
    const muteRoleID = "747584431736356933"
    const member = message.mentions.members.first()

    if(member) {
      const memberTarget = message.guild.members.cache.get(member.id)
      const muteRole = message.guild.roles.cache.find(role => role.id === muteRoleID)

      if (member.permissions.has("ADMINISTRATOR"))
        return message.channel.send("`❌ You cannot use this command on Admin!`")

      if (!(member.roles.cache.some(role => role.id === muteRoleID)))
        return message.channel.send("`❌ This user is already unmuted!`")

      if (muteRole) {
        memberTarget.roles.remove(muteRole.id)
        message.channel.send(`\`❎ \`${memberTarget}\` has been unmuted!\``)
      } else {
        message.channel.send("`❌ This user isn't muted!`")
      }
    } else {
      return message.channel.send("`❌ You forgot to enter user!`")
    }
  }
})