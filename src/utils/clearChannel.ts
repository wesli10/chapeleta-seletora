import { TextChannel } from "discord.js";

export async function clearMessages(channel: TextChannel) {
  channel.bulkDelete(99);

  console.log("Channel Cleaned!");
}
