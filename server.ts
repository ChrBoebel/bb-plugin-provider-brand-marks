// The whole plugin is a frontend content script; bb requires a server entry,
// so this one just announces itself.
import type { BbPluginApi } from "@get-bb/plugin-sdk";

export default async function plugin(bb: BbPluginApi) {
  bb.log.info("Provider brand marks registered");
}
