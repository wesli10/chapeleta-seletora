import { ExtendedClient } from "../structures/Client";

const client = new ExtendedClient();

export const db = client.connectToDataBase();

export async function fetchUser(user_id: string) {
  const { data } = await db
    .from("users")
    .select("*")
    .eq("id_discord", user_id)
    .single();

  return data;
}

export async function addUser(
  name: string,
  discord_tag: string,
  id_discord: string
) {
  const { data } = await db.from("users").insert({
    name: name,
    discord_tag: discord_tag,
    id_discord: id_discord,
  });

  return data;
}

export async function addXP(user_id: string) {
  const { data } = await db
    .rpc("increment", { xp: "xp", increment_num: 2 })
    .eq("id_discord", user_id);

  return data;
}
