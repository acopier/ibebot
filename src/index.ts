import "../seyfert.config.js";
import { HttpClient, type ParseClient } from "seyfert";
import { GenericAdapter } from "@slipher/generic-adapter";

import Ping from "./commands/ping.js";

const client = new HttpClient();
const adapter = new GenericAdapter(client);

await adapter.start();
client.start().then(async () => {
  // we need to load commands manually
  // @ts-expect-error
  await client.commands.set([Ping]);
});

export default {
  fetch(req: Request) {
    return adapter.fetch(req);
  },
};

declare module "seyfert" {
  interface UsingClient extends ParseClient<HttpClient> {} // HTTP
}
