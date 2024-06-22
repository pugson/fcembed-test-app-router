import Image from "next/image";
import styles from "./page.module.css";
import { FarcasterEmbed } from "react-farcaster-embed";
import "react-farcaster-embed/dist/styles.css";

const castData = {
  hash: "0x234aa6ed38a3eb2ca3a7ef091d95c9ae2e48371c",
  threadHash: "0x234aa6ed38a3eb2ca3a7ef091d95c9ae2e48371c",
  author: {
    fid: 557,
    username: "pugson",
    displayName: "pugson",
    pfp: {
      url: "https://i.seadn.io/gae/5hjYfRyqiRJV4EQ7ieSJrmb1LtO_vcAvREXSqnlY4HXXBsvgh1vumOwj5e4GwGhppEU2jLC9qJHEgEkaJ9V_B02jIFY9XmzgK1_F?w=500&auto=format",
      verified: false,
    },
    profile: {
      bio: {
        text: "𝚆𝙾𝚁𝙺𝙸𝙽𝙶 𝙾𝙽: @vision 👁️ ✦  ensdata.net ✦ pugson.net/rfe ✦ 𝙿𝚄𝙶.𝙴𝚃𝙷 ✦ 𝙿𝚁𝙴𝚅: @rainbow 🌈 ",
        mentions: ["vision", "rainbow"],
        channelMentions: [],
      },
      location: {
        placeId: "",
        description: "",
      },
    },
    followerCount: 200380,
    followingCount: 1833,
    activeOnFcNetwork: true,
    viewerContext: {
      following: true,
    },
  },
  text: "i need this performance to last 4 hours https://youtu.be/sYHtQSPPaBU",
  timestamp: 1708589959000,
  mentions: [],
  attachments: {},
  embeds: {
    images: [],
    urls: [
      {
        type: "url",
        openGraph: {
          url: "https://warpcast.com/pugson/0xf5ec2883",
          sourceUrl: "https://warpcast.com/pugson/0xf5ec2883",
          title: "pugson on Warpcast",
          description: "one of those dabeull mornings",
          domain: "warpcast.com",
          image: "https://client.warpcast.com/v2/og-image?castHash=0xf5ec288354061c3de982f85899662fcd52a35b0b",
          useLargeImage: true,
        },
      },
      {
        type: "url",
        openGraph: {
          url: "https://youtu.be/sYHtQSPPaBU",
          sourceUrl: "https://youtu.be/sYHtQSPPaBU",
          title: "Dabeull - Messages From The Stars (Live in Paris)",
          domain: "youtube.com",
          image:
            "https://i.ytimg.com/vi/sYHtQSPPaBU/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgUChBMA8=&rs=AOn4CLCMGtzdUCRsGfBCkBmBrSDf9-F94Q",
          useLargeImage: true,
        },
      },
    ],
    videos: [],
    casts: [
      {
        hash: "0xf5ec288354061c3de982f85899662fcd52a35b0b",
        threadHash: "0xf5ec288354061c3de982f85899662fcd52a35b0b",
        parentSource: {
          type: "url",
          url: "chain://eip155:7777777/erc721:0xe96c21b136a477a6a97332694f0caae9fbb05634",
        },
        author: {
          fid: 557,
          username: "pugson",
          displayName: "pugson",
          pfp: {
            url: "https://i.seadn.io/gae/5hjYfRyqiRJV4EQ7ieSJrmb1LtO_vcAvREXSqnlY4HXXBsvgh1vumOwj5e4GwGhppEU2jLC9qJHEgEkaJ9V_B02jIFY9XmzgK1_F?w=500&auto=format",
            verified: false,
          },
          profile: {
            bio: {
              text: "𝚆𝙾𝚁𝙺𝙸𝙽𝙶 𝙾𝙽: @vision 👁️ ✦ ensdata.net ✦ abidata.net ✦ final-v3.zip ✦ 𝙿𝚄𝙶.𝙴𝚃𝙷  ",
              mentions: ["vision"],
              channelMentions: [],
            },
            location: {
              placeId: "",
              description: "",
            },
          },
          followerCount: 64430,
          followingCount: 1730,
          activeOnFcNetwork: true,
        },
        text: "one of those dabeull mornings",
        timestamp: 1708588807000,
        tags: [
          {
            type: "channel",
            id: "music",
            name: "Music",
            imageUrl:
              "https://ipfs.decentralized-content.com/ipfs/bafybeibdk7mvrhmud76ye6wm623sjgtiashik2imee7dkeliiq4wfissqq",
          },
        ],
      },
    ],
    unknowns: [],
    processedCastText: "i need this performance to last 4 hours",
  },
  ancestors: {
    count: 0,
    casts: [],
  },
  replies: {
    count: 2,
    casts: [],
  },
  reactions: {
    count: 17,
  },
  recasts: {
    count: 2,
  },
  watches: {
    count: 0,
  },
  tags: [],
  viewCount: 1200,
  quoteCount: 1,
  combinedRecastCount: 3,
  warpsTipped: 0,
  viewerContext: {
    reacted: false,
    recast: false,
    bookmarked: false,
  },
};

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image src="/vercel.svg" alt="Vercel Logo" className={styles.vercelLogo} width={100} height={24} priority />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image className={styles.logo} src="/next.svg" alt="Next.js Logo" width={180} height={37} priority />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>Instantly deploy your Next.js site to a shareable URL with Vercel.</p>
        </a>
      </div>
      <FarcasterEmbed castData={castData} />
      <FarcasterEmbed url="https://warpcast.com/ted/0x04120d5229da58daad8598ca6b7d79390cc40a68" />
      <FarcasterEmbed url="https://warpcast.com/pugson/0x234aa6ed" />
      <FarcasterEmbed url="https://warpcast.com/pugson/0x1c80519c" />
      <FarcasterEmbed url="https://warpcast.com/builderszn/0xb488423d" />
      <FarcasterEmbed username="dwr" hash="0x48d47343" />
      <FarcasterEmbed url="https://warpcast.com/beecurious/0x7b243321" />
      <FarcasterEmbed url="https://warpcast.com/linda/0xa8fc16d13e235ab164dabc24d75e24ae62eacc05" />
    </main>
  );
}
