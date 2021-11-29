const Discord = require("discord.js")
const Command = require(`../Structures/Command.js`)

const createEmbedBase = (discord) => 
  new discord.MessageEmbed()
  .setColor("#ff5ce9")
const sendShipResult = (channel, embed, FirstUser, SecondUser) => {
  channel.send(`**💟 💞 __Calculation__ 💞 💟**\n🔻${FirstUser}\n🔺${SecondUser}`)
  channel.send({ embeds: [embed] })
}

module.exports = new Command({
  name: "ship",
  description: "Ship command!",
  permission: "",

  async run(message, args, client) {
    if (!args[1])
      return message.channel.send("`❌ You forgot to enter two users!`")

    if (!args[2])
      return message.channel.send("`❌ Enter the second user!`")

    if (args[1] || args[2]) {
      const FirstUser = args[1]
      const SecondUser = args[2]
      const randomNumber = Math.floor((Math.random() * 101) + 1)
      
      if (randomNumber <= 20) {
        const shipEmbed = createEmbedBase(Discord)
        .setTitle(`\`${randomNumber}%\` █ \`Awfully... 😭💔\``)
        sendShipResult(message.channel, shipEmbed, FirstUser, SecondUser)
      }

      if (randomNumber > 20 && randomNumber <= 40) {
        const shipEmbed = createEmbedBase(Discord)
        .setTitle(`\`${randomNumber}%\` ██ \`Poorly... 😓\``)
        sendShipResult(message.channel, shipEmbed, FirstUser, SecondUser)
      }

      if (randomNumber > 40 && randomNumber <= 68) {
        const shipEmbed = createEmbedBase(Discord)
        .setTitle(`\`${randomNumber}%\` ███ \`Quite well ❤️\``)
        sendShipResult(message.channel, shipEmbed, FirstUser, SecondUser)
      }

      if (randomNumber > 69 && randomNumber <= 81) {
        const shipEmbed = createEmbedBase(Discord)
        .setTitle(`\`${randomNumber}%\` ████ \`Mmm splendidly 🥰❤️\``)
        sendShipResult(message.channel, shipEmbed, FirstUser, SecondUser)
      }

      if (randomNumber > 81 && randomNumber <= 95) {
        const shipEmbed = createEmbedBase(Discord)
        .setTitle(`\`${randomNumber}%\` █████ \`Uff how hot 🥵💦\``)
        sendShipResult(message.channel, shipEmbed, FirstUser, SecondUser)
      }

      if (randomNumber > 95 && randomNumber <= 100) {
        const shipEmbed = createEmbedBase(Discord)
        .setTitle(`\`${randomNumber}%\` ██████ \`You're destined to be together 😍😍😍\``)
        sendShipResult(message.channel, shipEmbed, FirstUser, SecondUser)
      }

      if (randomNumber == 69) {
        const shipEmbed = createEmbedBase(Discord)
        .setTitle(`\`${randomNumber}%\` ████ \`( ͡❛ ͜ʖ͡❛ ) 🍆🍑💦\``)
        sendShipResult(message.channel, shipEmbed, FirstUser, SecondUser)
      }
    }
  }
})