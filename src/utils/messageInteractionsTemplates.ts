import { MessageActionRow, MessageButton, MessageEmbed } from "discord.js";

export const buttonQuestionsYes = new MessageActionRow().addComponents(
  new MessageButton()
    .setCustomId("yes")
    .setEmoji("✅")
    .setLabel("Sim")
    .setStyle("SUCCESS")
);

export const buttonQuestionsNo = new MessageActionRow().addComponents(
  new MessageButton()
    .setCustomId("no")
    .setEmoji("❌")
    .setLabel("Não")
    .setStyle("DANGER")
);
