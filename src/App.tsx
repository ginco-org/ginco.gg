type IconDef = {
  paths: string[];
  viewBox?: string;
  stroke?: boolean;
};

function icon(path: string): IconDef {
  return { paths: [path] };
}

function strokeIcon(...paths: string[]): IconDef {
  return { paths, stroke: true };
}

const icons: Record<string, IconDef> = {
  twitter: icon(
    "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  ),
  bluesky: icon(
    "M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z",
  ),
  youtube: icon(
    "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  ),
  github: icon(
    "M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z",
  ),
  curseforge: icon(
    "M18.326 9.2145S23.2261 8.4418 24 6.1882h-7.5066V4.4H0l2.0318 2.3576V9.173s5.1267 -0.2665 7.1098 1.2372c2.7146 2.516 -3.053 5.917 -3.053 5.917L5.0995 19.6c1.5465 -1.4726 4.494 -3.3775 9.8983 -3.2857 -2.0565 0.65 -4.1245 1.6651 -5.7344 3.2857h10.9248l-1.0288 -3.2726s-7.918 -4.6688 -0.8336 -7.1127z",
  ),
  discord: icon(
    "M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z",
  ),
  email: icon(
    "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z",
  ),
  bandcamp: icon("M3 5h13l5 7-5 7H3l5-7z"),
  artstation: {
    paths: [
      "M51.4,123.3l8.9,15.4l0,0c1.8,3.5,5.4,5.9,9.5,5.9l0,0l0,0h59.3l-12.3-21.3H51.4z",
      "M157.2,123.4c0-2.1-0.6-4.1-1.7-5.8l-34.8-60.4c-1.8-3.4-5.3-5.7-9.4-5.7H92.9l53.7,93l8.5-14.7C156.7,127,157.2,125.8,157.2,123.4z",
      "M108.1,108.1L84.2,66.6L60.2,108.1Z",
    ],
    viewBox: "48 54 114 98",
  },
  default: strokeIcon(
    "M12 2a10 10 0 1 1 0 20a10 10 0 1 1 0 -20",
    "M2 12h20",
    "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1 -4 10 15.3 15.3 0 0 1 -4 -10 15.3 15.3 0 0 1 4 -10",
  ),
};

const links = [
  { href: "https://discord.gg/4Hp9Yn8gSe", label: "Discord" },
  { href: "https://twitter.com/gincogg", label: "Twitter" },
  { href: "https://bsky.app/profile/ginco.gg", label: "Bluesky" },
  { href: "https://youtube.com/@ginco-org", label: "Youtube" },
  { href: "https://github.com/ginco-org", label: "GitHub" },
  {
    href: "https://www.curseforge.com/members/ginco/projects",
    label: "CurseForge",
  },
  { href: "mailto:contact@ginco.gg", label: "Email" },
];

const projects = [
  {
    name: "Byte Crashers: Jungle Jam",
    description:
      "This is a 4 player game, where you play as these little guys called Exoshells. Why are they called that? Eh, don’t worry about it. All you need to know is that these guys have been trapped in a giant board game, and now, you and your friends must put your friendship to the test and battle each other in a series of high-octane minigames.",

    image: "./assets/ByteCrashersSplash.jpg",
    logo: "./assets/ByteCrashersLogo.png",
    links: [
      {
        href: "https://www.curseforge.com/hytale/mods/byte-crashers-jungle-jam",
        label: "CurseForge",
      },
    ],
  },
  {
    name: "Save the Kitty",
    description:
      "A Hytale adventure world where you embark on a quest to rescue kitties in danger.",
    image: "./assets/SaveTheKittySplash.png",
    logo: "./assets/SaveTheKittyLogo.png",
    links: [
      {
        href: "https://www.curseforge.com/hytale/worlds/save-the-kitty",
        label: "CurseForge",
      },
    ],
  },
  {
    name: "HytaleCodex",
    description:
      "A comprehensive database for browsing and exploring Hytale game data.",
    image: "./assets/HytaleCodexSplash.png",
    links: [{ href: "https://codex.ginco.gg", label: "Website" }],
  },
  {
    name: "hytale-markers",
    description: "A library for parsing and working with Hytale marker data.",
    image: "./assets/HytaleMarkersSplash.png",
    links: [
      { href: "https://github.com/ginco-org/hytale-markers", label: "GitHub" },
    ],
  },
  {
    name: "hytale-codec",
    description: "Encoder and decoder for Hytale's binary file formats.",
    image: "./assets/HytaleCodecSplash.png",
    links: [
      { href: "https://github.com/ginco-org/hytale-codec", label: "GitHub" },
    ],
  },
];

const people = [
  {
    name: "Hawkon",
    avatar: "./assets/hawkon.png",
    positions: ["Admin", "Artist"],
    links: [
      "https://www.hawkon.art/",
      "https://x.com/_Hawkon",
      "https://www.youtube.com/@Hawkon",
    ],
  },
  {
    name: "Taya",
    avatar: "./assets/taya.png",
    positions: ["Developer", "Admin"],
    links: ["https://taya.net", "https://github.com/tayacrystals"],
  },
  {
    name: "Slamma",
    avatar: "./assets/slamma.png",
    positions: ["Music", "Artist"],
    links: [
      "https://slammaextra.wixsite.com/slamma",
      "https://www.youtube.com/@Slammaa",
      "https://slamma.bandcamp.com/",
    ],
  },
  {
    name: "Shroomy",
    avatar: "./assets/shroomy.png",
    positions: ["Artist"],
    links: [],
  },
  {
    name: "Hugo",
    avatar: "./assets/hugo.png",
    positions: ["Developer"],
    links: ["https://www.hugotrork.com/", "https://www.youtube.com/@hugotrork"],
  },
  {
    name: "Evee",
    avatar: "./assets/evee.png",
    positions: ["Artist"],
    links: ["https://eveescrafts.uwu.ai/", "https://x.com/Eveee_cx"],
  },
  {
    name: "Ethan",
    avatar: "./assets/ethan.png",
    positions: ["Writer"],
    links: [],
  },
  {
    name: "CrimzonKrow",
    avatar: "./assets/crimzonkrow.png",
    positions: ["Artist"],
    links: ["https://www.ravensroosts.com/"],
  },
  {
    name: "Memetheew",
    avatar: "./assets/memetheew.png",
    positions: ["Artist"],
    links: [
      "https://bento.me/memetheew",
      "https://x.com/memetheew",
      "https://www.youtube.com/channel/UC-MS-3uKH_m6LtYRsW3_dXA",
    ],
  },
  {
    name: "Vidde",
    avatar: "./assets/vidde.png",
    positions: ["Builder"],
    links: ["https://www.youtube.com/@AViddeHytale"],
  },
  {
    name: "Aza",
    avatar: "./assets/aza.png",
    positions: ["Artist", "Developer"],
    links: [
      "https://bsky.app/profile/azagwen.art",
      "https://github.com/Azagwen",
    ],
  },
  {
    name: "Skyao",
    avatar: "./assets/skyao.png",
    positions: ["Artist"],
    links: [
      "https://bsky.app/profile/porcelainsky.bsky.social",
      "https://www.artstation.com/skyao",
    ],
  },
];

function IconLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
      {icon}
    </a>
  );
}

function Project({
  name,
  description,
  image,
  logo,
  links,
}: {
  name: string;
  description: string;
  image?: string;
  logo?: string;
  links: { href: string; label: string }[];
}) {
  return (
    <article className="project">
      <div className="project-bg">
        {image ? (
          <img src={image} alt="" />
        ) : (
          <div className="project-bg-fallback" />
        )}
      </div>
      <div className="project-content">
        <h3>
          {logo && <img src={logo} alt="" className="project-logo" />}
          {name}
        </h3>
        <p>{description}</p>
        <div className="project-links">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

function linkToIconDef(link: string): IconDef {
  if (link.includes("github.com")) return icons.github;
  if (link.includes("x.com") || link.includes("twitter.com"))
    return icons.twitter;
  if (link.includes("youtube.com")) return icons.youtube;
  if (link.includes("curseforge.com")) return icons.curseforge;
  if (link.includes("bsky.app")) return icons.bluesky;
  if (link.includes("discord.gg")) return icons.discord;
  if (link.includes("mailto:")) return icons.email;
  if (link.includes("bandcamp.com")) return icons.bandcamp;
  if (link.includes("artstation.com")) return icons.artstation;
  return icons.default;
}

function linkToIcon(link: string): React.ReactNode {
  const { paths, viewBox = "0 0 24 24", stroke } = linkToIconDef(link);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox={viewBox}
      fill={stroke ? "none" : "currentColor"}
      stroke={stroke ? "currentColor" : undefined}
      strokeWidth={stroke ? "2" : undefined}
      strokeLinecap={stroke ? "round" : undefined}
      strokeLinejoin={stroke ? "round" : undefined}
    >
      {paths.map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  );
}

function Person({
  name,
  avatar,
  positions,
  links,
}: {
  name: string;
  avatar?: string;
  positions: string[];
  links: string[];
}) {
  return (
    <section>
      <div className="person-header">
        {avatar && <img src={avatar} alt={name} className="person-avatar" />}
        <div>
          <h2>{name}</h2>
          <p>{positions.join(", ")}</p>
        </div>
      </div>
      <div className="person-links">
        {links.map((link, index) => (
          <IconLink
            key={index}
            href={link}
            label={name}
            icon={linkToIcon(link)}
          />
        ))}
      </div>
    </section>
  );
}

export default function App() {
  return (
    <body>
      <section id="hero">
        <img src="./assets/ginco.svg" alt="GINCo Logo" />
        <h1>GINCo</h1>
        <p>
          We are a game studio creating immersive experiences in Hytale and
          Minecraft.
        </p>
      </section>
      <section id="connect">
        {links.map((link) => (
          <IconLink
            key={link.href}
            href={link.href}
            label={link.label}
            icon={linkToIcon(link.href)}
          />
        ))}
      </section>
      <section id="projects">
        <h2>Our Projects</h2>
        <div className="projects-list">
          {projects.map((project, index) => (
            <Project
              key={index}
              name={project.name}
              description={project.description}
              image={project.image}
              logo={project.logo}
              links={project.links}
            />
          ))}
        </div>
      </section>
      <section id="people">
        <h2>Meet the Team</h2>
        <div id="people-grid">
          {people.map((person, index) => (
            <Person
              key={index}
              name={person.name}
              avatar={person.avatar}
              positions={person.positions}
              links={person.links}
            />
          ))}
        </div>
      </section>
      <footer>
        <p>© {new Date().getFullYear()} GINCo</p>
      </footer>
    </body>
  );
}
