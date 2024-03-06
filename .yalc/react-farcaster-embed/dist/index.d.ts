/**
 * Renders a Farcaster embed for a cast. You can use two methods to render a Farcaster embed:
 * 1. Providing a Warpcast URL to a cast (url)
 * 2. Providing a username and hash of a cast (username, hash)
 * @param url Warpcast URL for the cast.
 * @param username Username of the cast author.
 * @param hash Hash of the cast.
 * @returns React JSX Component
 */
declare function FarcasterEmbed({
  url,
  username,
  hash,
}: {
  url?: string;
  username?: string;
  hash?: string;
}): Promise<any>;

export { FarcasterEmbed };
