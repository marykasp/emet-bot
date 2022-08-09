// make an embed
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName("info")
    .setDescription("Returns an embed."),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
          .setTitle(`Emet Selch!`)
          .setDescription('Bot returns information about your FFXIV character')
          .setColor(0x18e1ee)
          // set image of embed will be bots icon
          .setImage(client.user.displayAvatarURL())
          .setThumbnail(client.user.displayAvatarURL())
          .setTimestamp(Date.now())
          .setAuthor({
            url: `https://marykasp.com`,
            iconURL: interaction.user.displayAvatarURL(),
            name: interaction.user.tag
          })
          .setFooter({
            iconURL: client.user.displayAvatarURL(),
            text: client.user.tag
          })
          .setURL(`https://ko-fi.com/marykasp`)
          .addFields([
            {
              name: `Field 1`,
              value: `Field value 1`,
              inline: true,
            },
            {
              name: `Field 2`,
              value: `Field value 2`,
              inline: true
            }
          ]);

          await interaction.reply({
            embeds: [embed]
          })
  }
}
