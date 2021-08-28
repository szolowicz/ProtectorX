const Command = require(`../Structures/Command.js`)

module.exports = new Command({
  name: "unban",
  description: "Unban members from server!",
  permission: "BAN_MEMBERS",

  async run(message, args, client) {
    const userId = args[1]

    if (!userId) return message.channel.send("`❌ Enter the ID to unban!`")

    if (userId === message.author.id) return message.channel.send("`❌ You cannot unban yourself!`")

    const bans = await message.guild.bans.fetch()

    if (bans.has(userId)) {
      message.guild.members.unban(userId)
      message.channel.send(`\`❎ Successfully unbanned ${userId}!\``)
    } else {
      message.channel.send("`❌ Provided ID is invalid or isn't banned!`")
    }
  }
})