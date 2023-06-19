import { Command } from "../../structures/Command";

export default new Command({
  name: "quest",
  description: "Gera uma imagem com a OPENIA",
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
