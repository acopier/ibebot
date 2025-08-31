import "../seyfert.config.mjs";
import { HttpClient, type ParseClient } from "seyfert";
import { GenericAdapter } from "@slipher/generic-adapter";

const client = new HttpClient();
const adapter = new GenericAdapter(client);

await adapter.start();
await client.start();

export default {
  fetch(req: Request) {
    return adapter.fetch(req);
  },
};

declare module "seyfert" {
  interface UsingClient extends ParseClient<HttpClient> {} // HTTP
}
