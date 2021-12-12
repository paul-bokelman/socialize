import { github } from "./github";
import { twitter } from "./twitter";
import { opensea } from "./opensea";
import { discord } from "./discord";
import { facebook } from "./facebook";
import { twitch } from "./twitch";
import { youtube } from "./youtube";
import { instagram } from "./instagram";
import { dribbble } from "./dribbble";
import { linkedin } from "./linkedin";
import { snapchat } from "./snapchat";
import { reddit } from "./reddit";
import { tiktok } from "./tiktok";
import { stackoverflow } from "./stackoverflow";
import { steam } from "./steam";
import { web } from "./web";

export const i: { [key: string]: () => string } = {
  github,
  twitter,
  opensea,
  discord,
  facebook,
  twitch,
  youtube,
  instagram,
  dribbble,
  linkedin,
  snapchat,
  reddit,
  tiktok,
  stackoverflow,
  steam,
  web,
};
