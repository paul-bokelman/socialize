
<h1 align="center">Socialize</h1>

<p align="center">
  <span><img src="http://localhost:3000/api/badge/twitter" alt="twitter" /></span>
  <span><img src="http://localhost:3000/api/badge/github" alt="github" /></span>
  <span><img src="http://localhost:3000/api/badge/opensea" alt="opensea" /></span>
</p>


<p align="center">Elegant social media badges at your disposal. </p>

<h2 id="usage">Usage</h2>

Getting an icon in markdown:

```
![twitter](http://localhost:3000/api/badge/twitter)
```

Linking social to icon in markdown:

```
[![twitter](http://localhost:3000/api/badge/twitter)](https://twitter.com/your_handle)
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

| Name                             | Icon                                                             |
| -------------------------------- | ---------------------------------------------------------------- |
| Github (`github`)                | ![github](http://localhost:3000/api/badge/github)                |
| Twitter (`twitter`)              | ![twitter](http://localhost:3000/api/badge/twitter)              |
| Opensea (`opensea`)              | ![opensea](http://localhost:3000/api/badge/opensea)              |
| Facebook (`facebook`)            | ![facebook](http://localhost:3000/api/badge/facebook)            |
| Twitch (`twitch`)                | ![twitch](http://localhost:3000/api/badge/twitch)                |
| Youtube (`youtube`)              | ![youtube](http://localhost:3000/api/badge/youtube)              |
| Instagram (`instagram`)          | ![instagram](http://localhost:3000/api/badge/instagram)          |
| Dribbble (`dribbble`)            | ![dribbble](http://localhost:3000/api/badge/dribbble)            |
| Linkedin (`linkedin`)            | ![linkedin](http://localhost:3000/api/badge/linkedin)            |
| Snapchat (`snapchat`)            | ![snapchat](http://localhost:3000/api/badge/snapchat)            |
| Reddit (`redddit`)               | ![reddit](http://localhost:3000/api/badge/reddit)                |
| Tiktok (`tiktok`)                | ![tiktok](http://localhost:3000/api/badge/tiktok)                |
| Stack Overflow (`stackoverflow`) | ![stack overflow](http://localhost:3000/api/badge/stackoverflow) |
| Steam (`steam`)                  | ![steam](http://localhost:3000/api/badge/steam)                  |
