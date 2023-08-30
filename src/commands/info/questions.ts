import { MessageEmbed } from "discord.js";
import { Command } from "../../structures/Command";

export default new Command({
  name: "perguntas",
  description: "Inicia uma sequencia de perguntas para definir sua casa.!",

  run: async ({ interaction }) => {
    // async function createForm() {
    //   const answers = [];
    //   const channel = interaction.channel;
    // }

    // const embedQuestions = new MessageEmbed()
    //   .setColor("#fd4a5f")
    //   .setTitle("HMMMM VAMOS VER...")
    //   .setDescription("");

    try {
      await interaction.reply({
        content: " ⚠️--- Ta em construção ainda cu de foça --- ⚠️ ",
      });

      setTimeout(() => {
        interaction.deleteReply();
      }, 5000);
    } catch (error) {
      console.log(error);
    }
  },
});
