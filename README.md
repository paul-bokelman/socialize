<h1 align="center">Socialize</h1>

<p align="center">
  <span><a href="https://socialize-md.vercel.app/api/badge/twitter"><img src="https://socialize-md.vercel.app/api/badge/twitter" alt="twitter" /></a></span>
  <span><a href="https://socialize-md.vercel.app/api/badge/github"><img src="https://socialize-md.vercel.app/api/badge/github" alt="github" /></a></span>
  <span><a href="https://socialize-md.vercel.app/api/badge/opensea"><img src="https://socialize-md.vercel.app/api/badge/opensea" alt="opensea" /></a></span>
  <span><a href="https://socialize-md.vercel.app/api/badge/discord"><img src="https://socialize-md.vercel.app/api/badge/discord" alt="discord" /></a></span>
  <span><a href="https://socialize-md.vercel.app/api/badge/facebook"><img src="https://socialize-md.vercel.app/api/badge/facebook" alt="facebook" /></a></span>
  <span><a href="https://socialize-md.vercel.app/api/badge/twitch"><img src="https://socialize-md.vercel.app/api/badge/twitch" alt="twitch" /></a></span>
  <span><a href="https://socialize-md.vercel.app/api/badge/youtube"><img src="https://socialize-md.vercel.app/api/badge/youtube" alt="youtube" /></a></span>
  <span><a href="https://socialize-md.vercel.app/api/badge/instagram"><img src="https://socialize-md.vercel.app/api/badge/instagram" alt="instagram" /></a></span>
  <span><a href="https://socialize-md.vercel.app/api/badge/dribbble"><img src="https://socialize-md.vercel.app/api/badge/dribbble" alt="dribbble" /></a></span>
  <span><a href="https://socialize-md.vercel.app/api/badge/linkedin"><img src="https://socialize-md.vercel.app/api/badge/linkedin" alt="linkedin" /></a></span>
  <span><a href="https://socialize-md.vercel.app/api/badge/snapchat"><img src="https://socialize-md.vercel.app/api/badge/snapchat" alt="snapchat" /></a></span>
  <span><a href="https://socialize-md.vercel.app/api/badge/reddit"><img src="https://socialize-md.vercel.app/api/badge/reddit" alt="reddit" /></a></span>
  <span><a href="https://socialize-md.vercel.app/api/badge/tiktok"><img src="https://socialize-md.vercel.app/api/badge/tiktok" alt="tiktok" /></a></span>
  <span><a href="https://socialize-md.vercel.app/api/badge/stackoverflow"><img src="https://socialize-md.vercel.app/api/badge/stackoverflow" alt="stackoverflow" /></a></span>
  <span><a href="https://socialize-md.vercel.app/api/badge/steam"><img src="https://socialize-md.vercel.app/api/badge/steam" alt="steam" /></a></span>
</p>

<p align="center">Elegant social media badges to spice up your markdown at your disposal.</p>

<h2 id="usage">Usage</h2>

Getting an icon in markdown:

```
![twitter](https://socialize-md.vercel.app/api/badge/twitter)
```

Linking social to icon in markdown:

```
[![twitter](https://socialize-md.vercel.app/api/badge/twitter)](https://twitter.com/your_handle)
```

<h2 id="adding-a-new-badge">Adding a new badge</h2>

To add a new icon you must follow a couple of steps:

1. Fork this repo and create a new branch.
2. Add your icon template to the `/assets/server/icons` directory.
   - In order to properly align icon create a 20x20 pixel box and align 10-12px wide icon in the center both vertically and horizontally.
   - Icons must be between 10-12 pixels.
   - Icons must be white (#fff).
   - Strip all properties except for `path`.
3. Import and add your icon to the `i` object in `/assets/server/icons/index.ts`.
4. Navigate to `pages/api/badge/[ico].ts` and add your icon to the switch statement with the desired background color.
5. Create a pull request and wait for review!

<h2 id="all-current-icons">All current icons</h2>

| Name                             | Icon                                                                       |
| -------------------------------- | -------------------------------------------------------------------------- |
| Github (`github`)                | ![github](https://socialize-md.vercel.app/api/badge/github)                |
| Twitter (`twitter`)              | ![twitter](https://socialize-md.vercel.app/api/badge/twitter)              |
| Opensea (`opensea`)              | ![opensea](https://socialize-md.vercel.app/api/badge/opensea)              |
| Facebook (`facebook`)            | ![facebook](https://socialize-md.vercel.app/api/badge/facebook)            |
| Web (`web`)                      | ![web](https://socialize-md.vercel.app/api/badge/web)                      |
| Twitch (`twitch`)                | ![twitch](https://socialize-md.vercel.app/api/badge/twitch)                |
| Youtube (`youtube`)              | ![youtube](https://socialize-md.vercel.app/api/badge/youtube)              |
| Instagram (`instagram`)          | ![instagram](https://socialize-md.vercel.app/api/badge/instagram)          |
| Dribbble (`dribbble`)            | ![dribbble](https://socialize-md.vercel.app/api/badge/dribbble)            |
| Linkedin (`linkedin`)            | ![linkedin](https://socialize-md.vercel.app/api/badge/linkedin)            |
| Snapchat (`snapchat`)            | ![snapchat](https://socialize-md.vercel.app/api/badge/snapchat)            |
| Reddit (`reddit`)                | ![reddit](https://socialize-md.vercel.app/api/badge/reddit)                |
| Tiktok (`tiktok`)                | ![tiktok](https://socialize-md.vercel.app/api/badge/tiktok)                |
| Stack Overflow (`stackoverflow`) | ![stack overflow](https://socialize-md.vercel.app/api/badge/stackoverflow) |
| Steam (`steam`)                  | ![steam](https://socialize-md.vercel.app/api/badge/steam)                  |

<sub>Like this project? Support me with ethereum: 0xD4c6325E42fac0625B25C0d4DB40823870986609</sub>
