import * as react_jsx_runtime from 'react/jsx-runtime';

type FarcasterEmbedOptions = {
    timestampFormat?: Intl.DateTimeFormatOptions;
    timestampLocale?: string;
    customEndpoint?: string;
};

/**
 * Renders a Farcaster embed for a cast. You can use two methods to render a Farcaster embed:
 * 1. Providing a Warpcast URL to a cast (url)
 * 2. Providing a username and hash of a cast (username, hash)
 * @param url Warpcast URL for the cast.
 * @param username Username of the cast author.
 * @param hash Hash of the cast.
 * @param options Custom overrides. See FarcasterEmbedOptions type for available options.
 * @returns React JSX Component
 */
declare function FarcasterEmbed({ url, username, hash, options, }: {
    url?: string;
    username?: string;
    hash?: string;
    options?: FarcasterEmbedOptions;
}): Promise<react_jsx_runtime.JSX.Element>;

export { FarcasterEmbed };
