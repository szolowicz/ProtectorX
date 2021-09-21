const Command = require(`../Structures/Command.js`)

const banEvent = (message, channel, member) => {
  const memberTarget = message.guild.members.cache.get(member.id)
  memberTarget.ban()
  channel.send(`\`❎ \`${memberTarget}\` has been banned from this server!\``)
}

module.exports = new Command({
  name: "ban",
  description: "Ban members from server!",
  permission: "BAN_MEMBERS",

  async run(message, args, client) {
    const member = message.mentions.members.first()

    if (!args[1]) return message.channel.send("`❌ You forgot to enter user!`")

    args[1] = member

    if (member === message.author) return message.channel.send("`❌ You cannot ban yourself!`")

    if (member.permissions.has("ADMINISTRATOR")) return message.channel.send("`❌ You cannot ban Admin serwer!`")

    if (args[1]) {
      if (args[2]) {
        const reason = args.slice(2).join(' ')
        banEvent(message, message.channel, member)
        message.channel.send(`\`📝 Reason:\` **${reason}**`)
      } else {
        banEvent(message, message.channel, member)
      }
    } else {
      message.channel.send("`❌ You entered the wrong user!`")
    }
  }
})