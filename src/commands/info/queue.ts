import { Command } from "../../structures/Command";

export default new Command({
  name: "quest",
  description: "Inicia uma sequencia de perguntas para definir sua casa.",
  userPermissions: ["ADMINISTRATOR"],
  options: [
    {
      name: "description",
      description: "descreva a imagem para gerar",
      type: "STRING",
      required: true,
    },
  ],

  run: async ({ interaction }) => {},
});
