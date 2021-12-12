import type { NextApiRequest, NextApiResponse } from "next";
import { badge } from "../../../assets/server/badge";
import { i } from "../../../assets/server/icons/index";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  const { ico }: { [key: string]: string | string[] } = req.query;

  const getBadge = ({ ico }: { [key: string]: string | string[] }) => {
    const getIcon = () => {
      switch (ico) {
        case "twitter":
          return { icon: i.twitter(), color: "#1D9BF0" };
        case "github":
          return { icon: i.github(), color: "#000000" };
        case "opensea":
          return { icon: i.opensea(), color: "#2181E2" };
        case "discord":
          return { icon: i.discord(), color: "#5560EA" };
        case "facebook":
          return { icon: i.facebook(), color: "#237CF3" };
        case "twitch":
          return { icon: i.twitch(), color: "#9047FF" };
        case "youtube":
          return { icon: i.youtube(), color: "#F20000" };
        case "instagram":
          return { icon: i.instagram(), color: "#E4026F" };
        case "dribbble":
          return { icon: i.dribbble(), color: "#DE4982" };
        case "linkedin":
          return { icon: i.linkedin(), color: "#0D70A0" };
        case "snapchat":
          return { icon: i.snapchat(), color: "#FFFC00" };
        case "reddit":
          return { icon: i.reddit(), color: "#FF4500" };
        case "tiktok":
          return { icon: i.tiktok(), color: "#010101" };
        case "stackoverflow":
          return { icon: i.stackoverflow(), color: "#FDFDFD" };
        case "steam":
          return { icon: i.steam(), color: "#00587B" };
        case "web":
          return { icon: i.web(), color: "#4984fe" };
        default:
          throw new Error("Invalid icon");
      }
    };
    const { icon, color }: { icon: string; color: string } = getIcon();

    return badge({ icon, color });
  };

  const svg: string = getBadge({ ico });

  res.writeHead(200, {
    "Content-Type": "image/svg+xml",
    "Content-Length": svg.length,
  });
  res.end(svg);
}
