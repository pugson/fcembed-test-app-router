var te=Object.create;var w=Object.defineProperty;var se=Object.getOwnPropertyDescriptor;var re=Object.getOwnPropertyNames;var ie=Object.getPrototypeOf,ne=Object.prototype.hasOwnProperty;var oe=(e,s)=>{for(var t in s)w(e,t,{get:s[t],enumerable:!0})},H=(e,s,t,r)=>{if(s&&typeof s=="object"||typeof s=="function")for(let i of re(s))!ne.call(e,i)&&i!==t&&w(e,i,{get:()=>s[i],enumerable:!(r=se(s,i))||r.enumerable});return e};var M=(e,s,t)=>(t=e!=null?te(ie(e)):{},H(s||!e||!e.__esModule?w(t,"default",{value:e,enumerable:!0}):t,e)),me=e=>H(w({},"__esModule",{value:!0}),e);var ce={};oe(ce,{FarcasterEmbed:()=>le});module.exports=me(ce);var xe=require("server-only");var _=async(e,s,t)=>{try{let i=await(await fetch(t?.customEndpoint?`${t?.customEndpoint}/${e}/${s}`:`https://farcaster.tv/${e}/${s}`)).json();return i.result.casts[2]&&i.result.casts[2].author.username===e&&i.result.casts[2].hash.includes(s)?i.result.casts[2]:i.result.casts[0].castType==="root-embed"?i.result.casts[1]:i.result.casts[0]}catch(r){throw console.error(r),new Error(`Unable to fetch cast ${s} by ${e}.${t?.customEndpoint&&" You are using a custom endpoint ("+t?.customEndpoint+"). Make sure it is correct and the server is running. For more info about the proxy server check the README."}`)}};var U=M(require("linkify-react"));var o=require("react/jsx-runtime"),F=()=>(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,o.jsx)("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})}),R=()=>(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,o.jsx)("path",{d:"M17 2.1l4 4-4 4"}),(0,o.jsx)("path",{d:"M3 12.2v-2a4 4 0 0 1 4-4h12.8M7 21.9l-4-4 4-4"}),(0,o.jsx)("path",{d:"M21 11.8v2a4 4 0 0 1-4 4H4.2"})]}),P=()=>(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,o.jsx)("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})}),W=()=>(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,o.jsx)("path",{d:"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"})}),O=()=>(0,o.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 1260 1260",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,o.jsxs)("g",{clipPath:"url(#fc-embed-clip1)",children:[(0,o.jsx)("path",{d:"M947.747 1259.61H311.861C139.901 1259.61 0 1119.72 0 947.752V311.871C0 139.907 139.901 0.00541362 311.861 0.00541362H947.747C1119.71 0.00541362 1259.61 139.907 1259.61 311.871V947.752C1259.61 1119.72 1119.71 1259.61 947.747 1259.61Z",fill:"#472A91"}),(0,o.jsx)("path",{d:"M826.513 398.633L764.404 631.889L702.093 398.633H558.697L495.789 633.607L433.087 398.633H269.764L421.528 914.36H562.431L629.807 674.876L697.181 914.36H838.388L989.819 398.633H826.513Z",fill:"white"})]}),(0,o.jsx)("defs",{children:(0,o.jsx)("clipPath",{id:"fc-embed-clip1",children:(0,o.jsx)("rect",{width:"1259.61",height:"1259.61",fill:"white"})})})]});var k=require("react/jsx-runtime");function C({images:e}){return(0,k.jsx)("div",{className:"farcaster-embed-image-container",children:e.map(s=>(0,k.jsx)("a",{href:s.url,target:"_blank",className:"farcaster-embed-image-link",children:(0,k.jsx)("img",{src:s.url,alt:s.alt,className:"farcaster-embed-image"})},s.url))})}var N=M(require("react")),S=require("react/jsx-runtime");function B({source:e,poster:s,aspectRatio:t}){let[r,i]=N.default.useState(!1),[c,E]=N.default.useState(!1),f=m=>new Promise((h,p)=>{let l=document.createElement("script");l.src=m,l.type="module",l.onload=()=>h(l),l.onerror=()=>p(new Error(`[react-farcaster-embed] Script load error for ${m}`)),document.head.appendChild(l)});return N.default.useEffect(()=>{let m="https://cdn.jsdelivr.net/npm/media-chrome@1/+esm",h="https://cdn.jsdelivr.net/npm/hls-video-element@1.0/+esm";return f(m).then(()=>{i(!0)}).catch(p=>{console.error("Media Chrome loading failed",p)}),f(h).then(()=>{E(!0)}).catch(p=>{console.error("HLS Video Element loading failed",p)}),()=>{document.head.removeChild(document.head.querySelector(`script[src="${m}"]`)),document.head.removeChild(document.head.querySelector(`script[src="${h}"]`))}},[e,s,t]),(0,S.jsx)("div",{style:{aspectRatio:t},children:r&&c&&(0,S.jsx)("div",{className:"farcaster-embed-video-player",dangerouslySetInnerHTML:{__html:`<media-controller>
            <hls-video
              src="${e}"
              slot="media"
              volume="1"
              crossorigin
              playsinline
            ></hls-video>
            <media-poster-image
              slot="poster"
              src="${s}">
            </media-poster-image>
            <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>
            <media-control-bar>
              <media-play-button></media-play-button>
              <media-time-range></media-time-range>
              <media-time-display showduration remaining></media-time-display>
              <media-fullscreen-button></media-fullscreen-button>
            </media-control-bar>
          </media-controller>`}})})}var V=require("react/jsx-runtime");function T({source:e,poster:s,aspectRatio:t}){return(0,V.jsx)("div",{style:{aspectRatio:t},children:(0,V.jsx)("div",{className:"farcaster-embed-video-player",suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`<script type="module" src="https://cdn.jsdelivr.net/npm/media-chrome@1/+esm" crossorigin="anonymous"></script><script type="module" src="https://cdn.jsdelivr.net/npm/hls-video-element@1.0/+esm" crossorigin="anonymous"></script><media-controller>
            <hls-video
              src="${e}"
              slot="media"
              volume="1"
              crossorigin
              playsinline
            ></hls-video>
            <media-poster-image
              slot="poster"
              src="${s}">
            </media-poster-image>
            <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>
            <media-control-bar>
              <media-play-button></media-play-button>
              <media-time-range></media-time-range>
              <media-time-display showduration remaining></media-time-display>
              <media-fullscreen-button></media-fullscreen-button>
            </media-control-bar>
          </media-controller>`}})})}var L=require("react/jsx-runtime");function $({videos:e,client:s}){return(0,L.jsx)("div",{className:"farcaster-embed-video-container",children:e.map(t=>s?(0,L.jsx)(B,{source:t.sourceUrl,aspectRatio:t.width/t.height,poster:t.thumbnailUrl},t.url):(0,L.jsx)(T,{source:t.sourceUrl,aspectRatio:t.width/t.height,poster:t.thumbnailUrl},t.url))})}var a=require("react/jsx-runtime"),D={className:"farcaster-embed-body-link",target:"_blank"};function de(e,s){if(e.endsWith(s)){let t=e.lastIndexOf(s),r=e.substring(0,t),i=r.lastIndexOf(`
`);return i!==-1&&(r=r.substring(0,i)+r.substring(i+1)),r+e.substring(t+s.length)}else return e}function A({cast:e,client:s,options:t}){let r=e.author,i=`https://warpcast.com/~/profiles/${r.fid}`,c=new Date(e.timestamp),E=c.toLocaleString(t.timestampLocale,t.timestampFormat),f=c.toLocaleString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit",second:"2-digit",hour12:!0}),m=`https://warpcast.com/${r.username}/${e.hash}`,h=e.replies&&e.replies.count,p=e.reactions&&e.reactions.count,l=e.combinedRecastCount?e.combinedRecastCount:e.recasts.count,G=e.watches&&e.watches.count,I=e.embeds&&e.embeds.images,Y=I&&I.length>0,Z=e.embeds&&e.embeds.videos&&e.embeds.videos.length>0,J=e.embeds&&e.embeds.videos,K=e.embeds&&e.embeds.urls&&e.embeds.urls.length>0,v=e.embeds&&e.embeds.urls,Q=v&&v[v.length-1]?.openGraph?.url||"",X=e.embeds&&e.embeds.casts,q=e.embeds&&e.embeds.casts;return(0,a.jsxs)("div",{className:"not-prose farcaster-embed-container",children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"farcaster-embed-metadata",children:[(0,a.jsx)("a",{href:i,className:"farcaster-embed-avatar-link",children:(0,a.jsx)("img",{src:r.pfp.url,alt:`@${r.username}`,width:48,height:48,className:"farcaster-embed-author-avatar"})}),(0,a.jsxs)("div",{className:"farcaster-embed-author",children:[(0,a.jsx)("p",{className:"farcaster-embed-author-display-name",children:r.displayName}),(0,a.jsxs)("p",{className:"farcaster-embed-author-username",children:["@",r.username]})]}),(0,a.jsx)("div",{className:"farcaster-embed-timestamp",children:(0,a.jsx)("p",{title:f,children:E})})]}),(0,a.jsxs)("div",{className:"farcaster-embed-body",children:[(0,a.jsx)(U.default,{as:"p",options:D,children:de(e.text,Q)}),Y&&(0,a.jsx)(C,{images:I}),Z&&(0,a.jsx)($,{videos:J,client:s}),K&&(0,a.jsx)("div",{className:"farcaster-embed-urls-container",children:v.map((n,x)=>{let{description:u,domain:d,image:g,title:b,url:y,useLargeImage:ee}=n.openGraph||{},ae=d==="twitter.com"||d==="t.co"||d==="x.com";return d==="warpcast.com"?null:ee?(0,a.jsxs)("a",{href:y,target:"_blank",className:"farcaster-embed-url-link",children:[g&&(0,a.jsx)("img",{src:g,alt:b,className:"farcaster-embed-url-image"}),(0,a.jsxs)("span",{className:"farcaster-embed-url-metadata",children:[(0,a.jsx)("span",{className:"farcaster-embed-url-title",children:b}),u&&(0,a.jsx)("span",{className:"farcaster-embed-url-description",children:u}),d&&(0,a.jsx)("span",{className:"farcaster-embed-url-domain",children:d})]})]},x):(0,a.jsxs)("a",{href:y,target:"_blank",className:"farcaster-embed-url-link farcaster-embed-url-link-compact",children:[g&&!ae&&(0,a.jsx)("img",{src:g,alt:b,className:"farcaster-embed-url-image"}),(0,a.jsxs)("span",{className:"farcaster-embed-url-metadata",children:[(0,a.jsx)("span",{className:"farcaster-embed-url-title",children:b}),u&&(0,a.jsx)("span",{className:"farcaster-embed-url-description",children:u}),d&&(0,a.jsx)("span",{className:"farcaster-embed-url-domain",children:d})]})]},x)})}),X&&(0,a.jsx)("div",{className:"farcaster-embed-quote-cast-container",children:q.map(n=>{let u=new Date(n.timestamp).toLocaleString(t.timestampLocale,t.timestampFormat),d=n.embeds&&n.embeds.images&&n.embeds.images.length>0,g=n.embeds&&n.embeds.images,b=n.embeds&&n.embeds.videos&&n.embeds.videos.length>0,y=n.embeds&&n.embeds.videos;return(0,a.jsxs)("div",{className:"farcaster-embed-quote-cast",children:[(0,a.jsxs)("div",{className:"farcaster-embed-metadata",children:[(0,a.jsx)("div",{className:"farcaster-embed-avatar-link",children:(0,a.jsx)("img",{src:n.author.pfp.url,alt:`@${n.author.username}`,width:20,height:20,className:"farcaster-embed-author-avatar"})}),(0,a.jsxs)("div",{className:"farcaster-embed-author",children:[(0,a.jsx)("p",{className:"farcaster-embed-author-display-name",children:n.author.displayName}),(0,a.jsxs)("p",{className:"farcaster-embed-author-username",children:["@",n.author.username]})]}),(0,a.jsx)("div",{className:"farcaster-embed-timestamp",children:(0,a.jsx)("p",{children:u})})]}),(0,a.jsxs)("div",{className:"farcaster-embed-body",children:[(0,a.jsx)(U.default,{as:"p",options:D,children:n.text}),d&&(0,a.jsx)(C,{images:g}),b&&(0,a.jsx)($,{videos:y})]})]},n.hash)})})]}),e.tags.length>0&&(0,a.jsx)("div",{children:(0,a.jsxs)("div",{className:"farcaster-embed-channel",children:[e.tags[0].imageUrl&&(0,a.jsx)("img",{src:e.tags[0].imageUrl,alt:e.tags[0].name,width:16,height:16,className:"farcaster-embed-channel-avatar"}),e.tags[0].name&&(0,a.jsx)("p",{className:"farcaster-embed-channel-name",children:e.tags[0].name})]})})]}),(0,a.jsxs)("div",{className:"farcaster-embed-stats",children:[(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsxs)("a",{className:"farcaster-embed-stats-link",href:m,target:"_blank",children:[(0,a.jsx)(F,{}),(0,a.jsx)("span",{children:h.toLocaleString("en-US")})]})}),(0,a.jsx)("li",{children:(0,a.jsxs)("a",{className:"farcaster-embed-stats-link",href:m,target:"_blank",children:[(0,a.jsx)(R,{}),(0,a.jsx)("span",{children:l.toLocaleString("en-US")})]})}),(0,a.jsx)("li",{children:(0,a.jsxs)("a",{className:"farcaster-embed-stats-link",href:m,target:"_blank",children:[(0,a.jsx)(P,{}),(0,a.jsx)("span",{children:p.toLocaleString("en-US")})]})}),(0,a.jsx)("li",{children:(0,a.jsxs)("a",{className:"farcaster-embed-stats-link",href:m,target:"_blank",children:[(0,a.jsx)(W,{}),(0,a.jsx)("span",{children:G.toLocaleString("en-US")})]})})]}),(0,a.jsx)("div",{className:"farcaster-embed-warpcast-icon",children:(0,a.jsx)("a",{href:m,title:"Show on Warpcast",target:"_blank",className:"farcaster-embed-warpcast-link",children:(0,a.jsx)(O,{})})})]})]})}var z={timestampFormat:{year:"numeric",month:"short",day:"numeric"},timestampLocale:"en-US"};var j=require("react/jsx-runtime");async function le({url:e,username:s,hash:t,options:r}){if(e){let c=e.split("/");s=c[3],t=c[4]}if(!s||!t)throw new Error("You must provide a Warpcast URL or username and hash to embed a cast.");let i=await _(s,t,{customEndpoint:r?.customEndpoint});return(0,j.jsx)(A,{cast:i,options:{...z,...r}})}0&&(module.exports={FarcasterEmbed});
//# sourceMappingURL=index.js.map