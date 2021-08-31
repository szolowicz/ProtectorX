const Event = require(`../Structures/Event.js`)

module.exports = new Event("ready", (client) => {
  console.log("Bot is online!")

  const arrayOfStatus = [
    "🤖 Author : Adriks",
    "💻 GitHub : https://github.com/AdriksOwy",
    "My prefix is ❓",
    "❔help - All bot commands."
  ]

  let index = 0
  setInterval(() => {
    if (index === arrayOfStatus.length) index = 0
    const status = arrayOfStatus[index]
    client.user.setActivity(status)
    index++
  }, 3000)
})