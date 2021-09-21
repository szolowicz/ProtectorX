const Command = require(`../Structures/Command.js`)
const ms = require("ms")

module.exports = new Command({
  name: "unmute",
  description: "Unmute members from server!",
  permission: "MANAGE_MESSAGES",

  async run(message, args, client) {
    const member = message.mentions.members.first()

    if(member) {
      const memberTarget = message.guild.members.cache.get(member.id)
      const muteRole = message.guild.roles.cache.find(role => role.id === "854086771535904788")

      if (member.permissions.has("ADMINISTRATOR")) return message.channel.send("`❌ You cannot unmute Admin serwer!`")

      if (!(member.roles.cache.some(role => role.id === "854086771535904788"))) return message.channel.send("`❌ This user is already unmuted!`")

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