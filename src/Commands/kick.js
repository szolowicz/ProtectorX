const Command = require(`../Structures/Command.js`)

const kickEvent = (message, channel, member) => {
  const memberTarget = message.guild.members.cache.get(member.id)
  memberTarget.kick()
  channel.send(`\`❎ \`${memberTarget}\` has been kicked from this server!\``)
}

module.exports = new Command({
  name: "kick",
  description: "Kick members from server!",
  permission: "KICK_MEMBERS",

  async run(message, args, client) {
    const member = message.mentions.users.first()

    if (!args[1]) return message.channel.send("`❌ You forgot to enter user!`")

    args[1] = member

    if (member === message.author) return message.channel.send("`❌ You cannot kick yourself!`")

    if (args[1]) {
      if (args[2]) {
        const reason = args.slice(2).join(' ')
        kickEvent(message, message.channel, member)
        message.channel.send(`\`📝 Reason:\` **${reason}**`)
      } else {
        kickEvent(message, message.channel, member)
      }
    } else {
      message.channel.send("`❌ You entered the wrong user!`")
    }
  }
})