import { MessageEmbed } from 'discord.js'

export default {
  type: 'view',
  run
}

async function run(bot, guild, message) {
  let embed = new MessageEmbed()
    .setTitle('AmazonMonitor: Commands and Help')
    .setDescription('$search [product name]\n$details [product link]\n$watch -l [product link]` OR `$watch -c [product category] OR $watch -q [search for product]`. Include `-p` for a price limit, eg. $watch -q toothbrush -p 100\n$watchlist to view watchlist\n$unwatch [product position in watchlist] to remove product from a watchlist\n``If you need help then @sync``')
    .setColor('RED')

  bot.commands.forEach(c => {
    if (c.name) embed.addField(bot.prefix + c.name, `${c.desc}\n**Usage: ${bot.prefix + c.usage}**`)
  })

  message.channel.send(embed)
}