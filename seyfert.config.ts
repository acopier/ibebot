import { config } from "seyfert";

const { DISCORD_BOT_TOKEN, DISCORD_BOT_APP_ID, DISCORD_BOT_PUBLIC_KEY } =
  process.env;

export default config.http({
  token: DISCORD_BOT_TOKEN!,
  locations: {
    base: "src", // replace with "src" if using bun
    commands: "commands",
  },
  applicationId: DISCORD_BOT_APP_ID!,
  port: 3000, // default is 8080
  publicKey: DISCORD_BOT_PUBLIC_KEY!,
});
