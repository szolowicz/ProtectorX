const Command = require(`../Structures/Command.js`)

module.exports = new Command({
  name: "mute",
  description: "Mute members from server!",
  permission: "MANAGE_MESSAGES",

  async run(message, args, client) {
    const muteRoleID = "747584431736356933"
    const member = message.mentions.members.first()

    if (member) {
      const memberTarget = message.guild.members.cache.get(member.id);
      const muteRole = message.guild.roles.cache.find(role => role.id === muteRoleID)
      args[2] = args.slice(2).join(' ')

      if (member === message.author)
        return message.channel.send("`❌ You cannot mute yourself!`")

      if (member.permissions.has("ADMINISTRATOR"))
        return message.channel.send("`❌ You cannot use this command on Admin!`")

      if (member.roles.cache.some(role => role.id === muteRoleID))
        return message.channel.send("`❌ This user is already muted!`")

      if (!args[2]) {
        memberTarget.roles.add(muteRole.id)
        message.channel.send(`\`❎ \`${memberTarget}\` has been muted for breaking the rules! 📝\``)
      } else {
        memberTarget.roles.add(muteRole.id)
        message.channel.send(`\`❎ \`${memberTarget}\` has been muted for \`**${args[2]}**\`! 📝\``)
      }
    } else {
      return message.channel.send("`❌ You forgot to enter user!`")
    }
  }
})