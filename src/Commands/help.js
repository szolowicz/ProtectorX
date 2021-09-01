const Discord = require("discord.js")
const Command = require(`../Structures/Command.js`)

module.exports = new Command({
  name: "help",
  description: "Shows all commands bot!",
  permission: "",

  async run(message, args, client) {
    const embed = new Discord.MessageEmbed()

    embed.setTitle("`✖️📋 Commands list`")
      .setColor("BLUE")
      .setDescription(
        "**?help** - `Shows all commands ProtectorX.`\n**?ping** - `Checks the ping of the bot.`\n**?github** - `Shows the author's github.`\n**?ship** - `Matchmaking.`\n**?slowmode** - `Sets the cooldown writing on the channel.`\n**?clear** - `Clears the entered number of messages.`\n**?nuke** - `Clears channel from messages.`\n**?kick** - `Kicks a player from the server.`\n**?ban** - `Bans a player from the server.`\n**?unban** - `Unbans a player from the server.`")
      .setTimestamp()
    
    message.channel.send({ embeds: [embed] })
  }
})