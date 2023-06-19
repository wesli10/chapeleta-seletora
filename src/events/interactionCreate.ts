import { CommandInteractionOptionResolver } from "discord.js";
import { client } from "..";

import { Event } from "../structures/Event";
import { ExtendedInteraction } from "../typings/Command";
import { addXP } from "../utils/db";

export default new Event("interactionCreate", async (interaction) => {
  client.on("messageCreate", async () => {
    const user = interaction.user.id;

    try {
      const test = await addXP(user);
      console.log(test);
    } catch (error) {
      console.log(error);
    }
  });

  // Chat input Commands
  if (interaction.isCommand()) {
    await interaction.deferReply({
      ephemeral: false,
      fetchReply: true,
    });
    const command = client.commands.get(interaction.commandName);
    if (!command)
      return interaction.followUp("You have used a non existent command");

    command.run({
      args: interaction.options as CommandInteractionOptionResolver,
      client,
      interaction: interaction as ExtendedInteraction,
    });
  }
});
