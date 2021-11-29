const Command = require(`../Structures/Command.js`)

module.exports = new Command({
  name: "slowmode",
  description: "Set slowmode send messages channel!",
  permission: "MANAGE_MESSAGES",

  async run(message, args, client) {
    const time = args[1]

    if (!time || isNaN(time))
      return message.reply(`\`${time == undefined ? "✖️ Enter a time in seconds!" : `❌ ${time} is an invalid number!`}\``)

    message.channel.setRateLimitPerUser(time, "No Reason")
    message.channel.send(`\`❎ Successfully set the slowmode on this channel ${time} seconds!\``)
  }
})