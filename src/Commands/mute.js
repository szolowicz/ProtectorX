const Command = require(`../Structures/Command.js`)
const ms = require("ms")

module.exports = new Command({
  name: "mute",
  description: "Mute members from server!",
  permission: "MANAGE_MESSAGES",

  async run(message, args, client) {
    const member = message.mentions.members.first()

    if (member) {
      const memberTarget = message.guild.members.cache.get(member.id);
      const muteRole = message.guild.roles.cache.find(role => role.id === "854086771535904788")

      args[1] = member

      if (member === message.author) return message.channel.send("`❌ You cannot mute yourself!`")

      if (member.permissions.has("ADMINISTRATOR")) return message.channel.send("`❌ You cannot mute Admin serwer!`")

      if (member.roles.cache.some(role => role.id === "854086771535904788")) return message.channel.send("`❌ This user is already muted!`")

      if (!args[2]) {
        memberTarget.roles.add(muteRole.id)
        message.channel.send(`\`❎ \`${memberTarget}\` has been muted forever for breaking the rules! 📝\``)
      }

      if (!args[3] && args[2]) {
        if ((args[2] === undefined || !((/[0-9]{1,}((s)|(ms)|(m)|(h))/g).test(args[2])))) {
          message.channel.send("`❌ You entered the wrong time!`")
        } else {
          memberTarget.roles.add(muteRole.id)
          message.channel.send(`\`❎ \`${memberTarget}\` has been muted for \`**__${ms(ms(args[2]))}__**\`! 🕒\``)
        }
      }

      args[3] = args.slice(3).join(' ')

      if (args[3] && args[2]) {
        if ((args[2] === undefined || !((/[0-9]{1,}((s)|(ms)|(m)|(h))/g).test(args[2])))) {
          message.channel.send("`❌ You entered the wrong time!`")
        } else {
          memberTarget.roles.add(muteRole.id)
          message.channel.send(`\`❎ \`${memberTarget}\` has been muted for \`**__${ms(ms(args[2]))}__**\` for \`**__${args[3]}__**\`! 💬\``)
        }
      }

      if (args[2] !== undefined) {
        setTimeout(function () {
          if (member.roles.cache.some(role => role.id === "854086771535904788")) {
            memberTarget.roles.remove(muteRole.id);
            message.channel.send(`\`❎ \`${memberTarget}\` has been unmuted! 🔊\``)
          }
        }, ms(args[2]));
      }
    } else {
      return message.channel.send("`❌ You forgot to enter user!`")
    }
  }
})