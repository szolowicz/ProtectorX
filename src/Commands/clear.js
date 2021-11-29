const Command = require(`../Structures/Command.js`)

module.exports = new Command({
  name: "clear",
  description: "Clear command!",
  permission: "MANAGE_MESSAGES",

  async run(message, args, client) {
    const amount = args[1]
    const amountParsed = parseInt(amount)

    if (!amount || isNaN(amount))
      return message.reply(`\`❌ ${amount == undefined ? "You didn't enter a number!" : amount + " is an invalid number!"}\``)
    
    if (amountParsed > 100)
      return message.reply("`❌ You cannot clear more than 100 messages!`")
    
    message.channel.bulkDelete((amountParsed + 1), true)

    const msg = await message.channel.send(`\`❎ Cleared ${amountParsed} messages!\``)
    setTimeout(() => msg.delete(), 2500)
  }
})