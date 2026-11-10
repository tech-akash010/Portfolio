import React from 'react';

interface SkillLogoProps {
  name: string;
  className?: string;
}

export const SkillLogo: React.FC<SkillLogoProps> = ({ name, className = 'w-10 h-10' }) => {
  switch (name) {
    case 'C':
      return (
        <svg viewBox="0 0 128 128" className={className} fill="none" aria-hidden="true">
          <path fill="#659AD2" d="M115.4 30.7L67.1 2.9c-.7-.4-1.6-.7-2.5-.7s-1.8.2-2.5.7L13.8 30.7c-1.6.9-2.5 2.6-2.5 4.4v55.6c0 1.8 1 3.5 2.5 4.4l48.3 27.9c.8.5 1.7.7 2.6.7.9 0 1.8-.2 2.6-.7l48.3-27.9c1.6-.9 2.5-2.6 2.5-4.4V35.1c-.2-1.8-1.2-3.5-2.7-4.4z"/>
          <path fill="#004482" d="M64.6 114.7l48.3-27.9c.7-.4 1.3-1.1 1.7-1.8L64.6 64.6v50.1z"/>
          <path fill="#00599C" d="M114.6 35.1v50.3c0 .8-.4 1.5-1 2l-49 27.3v-50.1l50-29.5z"/>
          <path fill="#A2BFDE" d="M64.6 14.5l48.3 27.9c.7.4 1.3 1.1 1.7 1.8L64.6 64.6V14.5z"/>
          <path fill="#FFFFFF" d="M84.2 79.5c-4.8 7.3-13 12.1-22.3 12.1-14.8 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8c9.3 0 17.5 4.8 22.3 12.1l11.4-8.3C88.2 29.8 75.6 23.3 61.9 23.3 39.5 23.3 21.3 41.5 21.3 64s18.2 40.7 40.7 40.7c13.7 0 26.3-6.5 33.7-18.5l-11.5-6.7z"/>
        </svg>
      );

    case 'C++':
      return (
        <svg viewBox="0 0 128 128" className={className} fill="none" aria-hidden="true">
          <path fill="#659AD2" d="M115.4 30.7L67.1 2.9c-.7-.4-1.6-.7-2.5-.7s-1.8.2-2.5.7L13.8 30.7c-1.6.9-2.5 2.6-2.5 4.4v55.6c0 1.8 1 3.5 2.5 4.4l48.3 27.9c.8.5 1.7.7 2.6.7.9 0 1.8-.2 2.6-.7l48.3-27.9c1.6-.9 2.5-2.6 2.5-4.4V35.1c-.2-1.8-1.2-3.5-2.7-4.4z"/>
          <path fill="#004482" d="M64.6 114.7l48.3-27.9c.7-.4 1.3-1.1 1.7-1.8L64.6 64.6v50.1z"/>
          <path fill="#00599C" d="M114.6 35.1v50.3c0 .8-.4 1.5-1 2l-49 27.3v-50.1l50-29.5z"/>
          <path fill="#A2BFDE" d="M64.6 14.5l48.3 27.9c.7.4 1.3 1.1 1.7 1.8L64.6 64.6V14.5z"/>
          <path fill="#FFFFFF" d="M72.2 79.5c-4.8 7.3-13 12.1-22.3 12.1-14.8 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8c9.3 0 17.5 4.8 22.3 12.1l11.4-8.3C76.2 29.8 63.6 23.3 49.9 23.3 27.5 23.3 9.3 41.5 9.3 64s18.2 40.7 40.7 40.7c13.7 0 26.3-6.5 33.7-18.5l-11.5-6.7z"/>
          <path fill="#FFFFFF" d="M82 57h5v-5h4v5h5v4h-5v5h-4v-5h-5v-4zm18 0h5v-5h4v5h5v4h-5v5h-4v-5h-5v-4z"/>
        </svg>
      );

    case 'Python':
      return (
        <svg viewBox="0 0 128 128" className={className} fill="none" aria-hidden="true">
          <path
            d="M63.6 14c-27.4 0-25.7 11.9-25.7 11.9l.03 12.3h26.2v3.7H29.8C18.6 41.9 12 49.7 12 65.8c0 16.2 5.8 23.3 16.5 23.3h9.8V75.3c0-13.2 11.3-24.8 24.8-24.8h26.1c11.2 0 20.3-9.5 20.3-20.7 0-11-9.2-15.8-25.9-15.8zm-14.3 7.5a4.2 4.2 0 110 8.4 4.2 4.2 0 010-8.4z"
            fill="#387EB8"
          />
          <path
            d="M64.4 114c27.4 0 25.7-11.9 25.7-11.9l-.03-12.3H63.9v-3.7h34.3c11.2 0 17.8-7.8 17.8-23.9 0-16.2-5.8-23.3-16.5-23.3h-9.8v13.8c0 13.2-11.3 24.8-24.8 24.8H38.8c-11.2 0-20.3 9.5-20.3 20.7 0 11 9.2 15.8 25.9 15.8zm14.3-7.5a4.2 4.2 0 110-8.4 4.2 4.2 0 010 8.4z"
            fill="#FFE052"
          />
        </svg>
      );

    case 'JavaScript':
      return (
        <svg viewBox="0 0 128 128" className={className} fill="none" aria-hidden="true">
          <rect width="128" height="128" rx="16" fill="#F7DF1E" />
          <path
            d="M71.2 84.7c2.6 4.3 6.1 7.6 12.3 7.6 5.2 0 8.5-2.6 8.5-6.1 0-4.3-3.5-5.9-9.5-8.5l-3.3-1.4c-9.5-4-15.7-9.2-15.7-20 0-10 7.7-17.6 19.8-17.6 8.6 0 14.8 3 19.1 10.7l-9.1 5.8c-2-3.6-4.6-5.1-9.9-5.1-4.4 0-7.3 2.7-7.3 5.9 0 3.6 2.3 5.2 7.8 7.5l3.3 1.4c11.3 4.9 17.6 9.8 17.6 21 0 12-9.4 18.5-21.7 18.5-12.2 0-20.2-5.9-24.1-13.8l9.9-5.9zM31.5 83.9c1.9 3.2 4.4 5.9 8.8 5.9 4.6 0 7.5-1.9 7.5-8.9V40h12.5v40.7c0 13.7-8 19.6-19.8 19.6-10.8 0-17.1-5.6-20.3-12.4l11.3-4z"
            fill="#000000"
          />
        </svg>
      );

    case 'TypeScript':
      return (
        <svg viewBox="0 0 128 128" className={className} fill="none" aria-hidden="true">
          <rect width="128" height="128" rx="16" fill="#3178C6" />
          <path
            d="M69.8 84.7c2.6 4.3 6.1 7.6 12.3 7.6 5.2 0 8.5-2.6 8.5-6.1 0-4.3-3.5-5.9-9.5-8.5l-3.3-1.4c-9.5-4-15.7-9.2-15.7-20 0-10 7.7-17.6 19.8-17.6 8.6 0 14.8 3 19.1 10.7l-9.1 5.8c-2-3.6-4.6-5.1-9.9-5.1-4.4 0-7.3 2.7-7.3 5.9 0 3.6 2.3 5.2 7.8 7.5l3.3 1.4c11.3 4.9 17.6 9.8 17.6 21 0 12-9.4 18.5-21.7 18.5-12.2 0-20.2-5.9-24.1-13.8l9.9-5.9zM22.5 40h38v10.5H48v50H35V50.5H22.5V40z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case 'React':
      return (
        <svg viewBox="0 0 128 128" className={className} fill="none" aria-hidden="true">
          <circle cx="64" cy="64" r="10.5" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="5.5" fill="none">
            <ellipse cx="64" cy="64" rx="52" ry="19" />
            <ellipse cx="64" cy="64" rx="52" ry="19" transform="rotate(60 64 64)" />
            <ellipse cx="64" cy="64" rx="52" ry="19" transform="rotate(120 64 64)" />
          </g>
        </svg>
      );

    case 'Node.js':
      return (
        <svg viewBox="0 0 128 128" className={className} fill="none" aria-hidden="true">
          <path fill="#339933" d="M64 12.5L14.7 41v57L64 126.5l49.3-28.5v-57L64 12.5z"/>
          <path fill="#FFFFFF" d="M64 26.3l37.4 21.6v43.2L64 112.7 26.6 91.1V47.9L64 26.3z" opacity="0.15"/>
          <path fill="#FFFFFF" d="M62.2 44.5c-.8-.5-1.9-.5-2.7 0L42.8 54.4c-.8.5-1.3 1.3-1.3 2.3v17.4c0 1 .5 1.8 1.3 2.3l6.5 3.8c1.3.8 3 .3 3.8-1 .8-1.3.3-3-1-3.8l-4.7-2.7V57.6l13.4-7.8 13.4 7.8v15.1l-13.4 7.8-4.8-2.8c-1.3-.8-3-.3-3.8 1-.8 1.3-.3 3 1 3.8l6.5 3.8c.8.5 1.9.5 2.7 0l16.7-9.7c.8-.5 1.3-1.3 1.3-2.3V56.7c0-1-.5-1.8-1.3-2.3L62.2 44.5z"/>
        </svg>
      );

    case 'Figma':
      return (
        <svg viewBox="0 0 128 128" className={className} fill="none" aria-hidden="true">
          <path d="M42 22h22v21.5H42a10.75 10.75 0 01-10.75-10.75A10.75 10.75 0 0142 22z" fill="#F24E1E"/>
          <path d="M64 22h22a10.75 10.75 0 0110.75 10.75A10.75 10.75 0 0186 43.5H64V22z" fill="#FF7262"/>
          <path d="M64 43.5h22a10.75 10.75 0 0110.75 10.75A10.75 10.75 0 0186 65H64V43.5z" fill="#1ABCFE"/>
          <path d="M42 43.5h22V65H42A10.75 10.75 0 0131.25 54.25 10.75 10.75 0 0142 43.5z" fill="#A259FF"/>
          <path d="M42 65h22v21.5a10.75 10.75 0 01-10.75 10.75A10.75 10.75 0 0131.25 86.5 10.75 10.75 0 0142 65z" fill="#0ACF83"/>
          <circle cx="74.75" cy="54.25" r="10.75" fill="#1ABCFE"/>
        </svg>
      );

    case 'Canva':
      return (
        <svg viewBox="0 0 128 128" className={className} fill="none" aria-hidden="true">
          <circle cx="64" cy="64" r="56" fill="url(#canva-gradient)" />
          <path
            d="M74.8 45.2c-5.2 0-9.8 2.6-12.8 7.3-3.2-5.1-8.5-7.3-14.8-7.3-12.6 0-21.7 9.8-21.7 24.3 0 15.6 10.2 24.9 23.8 24.9 8.2 0 14.5-3.6 18.2-10.1l-6.2-4.1c-2.9 4.6-6.8 6.9-12 6.9-8.8 0-14.8-6.1-14.8-16.7 0-10.2 5.8-16.7 13.9-16.7 5.6 0 9.8 3.1 11.2 8.4h8.2c-1.6-9.6-7.5-16.9-13-16.9z"
            fill="#FFFFFF"
          />
          <defs>
            <linearGradient id="canva-gradient" x1="16" y1="16" x2="112" y2="112" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00C4CC" />
              <stop offset="1" stopColor="#7D2AE8" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'Branding':
      return (
        <svg viewBox="0 0 128 128" className={className} fill="none" aria-hidden="true">
          <rect width="128" height="128" rx="16" fill="#222222" />
          <circle cx="64" cy="64" r="42" stroke="#FF6D1F" strokeWidth="4" />
          <path d="M64 22v84M22 64h84" stroke="#FAF3E1" strokeWidth="2" strokeDasharray="4 4" opacity="0.4" />
          <polygon points="64,34 94,64 64,94 34,64" stroke="#FF6D1F" strokeWidth="3" fill="#FF6D1F" fillOpacity="0.15" />
          <circle cx="64" cy="64" r="8" fill="#FF6D1F" />
        </svg>
      );

    case 'Graphic Design':
      return (
        <svg viewBox="0 0 128 128" className={className} fill="none" aria-hidden="true">
          <rect width="128" height="128" rx="16" fill="#001E36" />
          <rect x="6" y="6" width="116" height="116" rx="12" stroke="#31A8FF" strokeWidth="4" />
          <path
            d="M32 40h21c11.5 0 19 6.2 19 16.5S64.5 73 53 73H43v23H32V40zm11 23.5h9.5c6 0 9.5-3 9.5-7.5s-3.5-7.5-9.5-7.5H43v15zm37.5 17c3.2 2.3 8.3 4.2 13 4.2 4.8 0 7.5-2 7.5-5 0-3.3-3.2-4.6-8.5-6.5l-3.5-1.2c-8-2.8-12.5-6.5-12.5-13.8 0-8 6.5-14 16.5-14 5.5 0 10.5 1.8 14 4.5l-3.5 7.5c-2.8-2-6.5-3.5-10.5-3.5-4.5 0-6.8 2-6.8 4.6 0 2.8 2.5 4 7.5 5.8l3.5 1.2c9 3.2 13.5 7.2 13.5 14.5 0 8.8-7.2 14.5-18 14.5-6.5 0-12.8-2.2-16.7-5.5l4-7.2z"
            fill="#31A8FF"
          />
        </svg>
      );

    case 'Illustration':
      return (
        <svg viewBox="0 0 128 128" className={className} fill="none" aria-hidden="true">
          <rect width="128" height="128" rx="16" fill="#330000" />
          <rect x="6" y="6" width="116" height="116" rx="12" stroke="#FF9A00" strokeWidth="4" />
          <path
            d="M48.5 39.5L67 96H55.5l-3.8-12.5H35.8L32 96H21l18.5-56.5h9zm-1.8 34.5L42 53.5l-4.7 20.5h9.4zm34.3-12.5V96H70V61.5h11zm0-17.5v9H70V44h11z"
            fill="#FF9A00"
          />
        </svg>
      );

    case 'UI/UX':
      return (
        <svg viewBox="0 0 128 128" className={className} fill="none" aria-hidden="true">
          <rect width="128" height="128" rx="16" fill="#222222" />
          <rect x="20" y="24" width="88" height="80" rx="8" stroke="#FAF3E1" strokeWidth="4" />
          <line x1="20" y1="44" x2="108" y2="44" stroke="#FAF3E1" strokeWidth="3" />
          <circle cx="32" cy="34" r="3" fill="#FF6D1F" />
          <circle cx="42" cy="34" r="3" fill="#FAF3E1" opacity="0.5" />
          <circle cx="52" cy="34" r="3" fill="#FAF3E1" opacity="0.5" />
          <rect x="28" y="52" width="28" height="44" rx="4" fill="#FF6D1F" fillOpacity="0.25" stroke="#FF6D1F" strokeWidth="2" />
          <rect x="64" y="52" width="36" height="18" rx="4" fill="#FAF3E1" fillOpacity="0.2" />
          <rect x="64" y="76" width="36" height="20" rx="4" fill="#FAF3E1" fillOpacity="0.1" />
        </svg>
      );

    case 'Git':
      return (
        <svg viewBox="0 0 128 128" className={className} fill="none" aria-hidden="true">
          <path
            fill="#F05032"
            d="M123.6 57.3L70.7 4.4a9.5 9.5 0 00-13.4 0L44 17.7l16.8 16.8a11.3 11.3 0 0114.3 14.4l16.2 16.2a11.3 11.3 0 11-6.7 6.7L69 56.2v33.4a11.3 11.3 0 11-9.5 0V54.4a11.3 11.3 0 01-6-14.8L37 23 4.4 55.6a9.5 9.5 0 000 13.4l52.9 52.9a9.5 9.5 0 0013.4 0l52.9-52.9a9.5 9.5 0 000-11.7z"
          />
        </svg>
      );

    case 'GitHub':
      return (
        <svg viewBox="0 0 128 128" className={className} fill="none" aria-hidden="true">
          <rect width="128" height="128" rx="16" fill="#222222" />
          <path
            fill="#FAF3E1"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M64 18C38.6 18 18 38.6 18 64c0 20.3 13.2 37.5 31.5 43.6 2.3.4 3.2-1 3.2-2.2 0-1.1-.1-4.9-.1-8.9-12.8 2.8-15.5-5.5-15.5-5.5-2.1-5.3-5.1-6.8-5.1-6.8-4.2-2.9.3-2.8.3-2.8 4.6.3 7 4.7 7 4.7 4.1 7 10.8 5 13.4 3.8.4-3 1.6-5 2.9-6.1-10.2-1.1-20.9-5.1-20.9-22.8 0-5.1 1.8-9.2 4.7-12.4-.5-1.2-2-5.9.5-12.2 0 0 3.9-1.2 12.7 4.7 3.7-1 7.7-1.5 11.7-1.5 4 0 8 .5 11.7 1.5 8.8-6 12.7-4.7 12.7-4.7 2.5 6.4 1 11.1.5 12.2 3 3.3 4.7 7.4 4.7 12.4 0 17.8-10.8 21.6-21 22.8 1.7 1.4 3.2 4.3 3.2 8.6 0 6.2-.1 11.2-.1 12.7 0 1.2.9 2.7 3.2 2.2 18.3-6.1 31.5-23.3 31.5-43.6C110 38.6 89.4 18 64 18z"
          />
        </svg>
      );

    case 'Docker':
      return (
        <svg viewBox="0 0 128 128" className={className} fill="none" aria-hidden="true">
          <path
            fill="#2496ED"
            d="M123.6 56.8c-2.4-1.7-7.6-3-13.4-1.8-.7-3.7-2.9-7-6.2-9.2l-3.4-2.2-.8 3.9c-1 5.2.2 10.5 3.3 14.6-2.1 1.1-5.4 2.2-9.6 2.2H12.7c-2.6 10.3.3 22 7.7 29.8 12.3 12.8 34.3 13.7 51.5 8.8 17.5-5 30-17 38.2-32.9 5.7.5 11.2-.7 15.2-4.1 2.3-2 3.5-5.2 3.8-5.6l-5.5-3.5zM45 40.5h11.7v11.7H45V40.5zm15.6 0h11.7v11.7H60.6V40.5zm15.6 0h11.7v11.7H76.2V40.5zm-46.8 15.6h11.7v11.7H29.4V56.1zm15.6 0h11.7v11.7H45V56.1zm15.6 0h11.7v11.7H60.6V56.1zm15.6 0h11.7v11.7H76.2V56.1zm15.6 0h11.7v11.7H91.8V56.1z"
          />
        </svg>
      );

    case 'VS Code':
      return (
        <svg viewBox="0 0 128 128" className={className} fill="none" aria-hidden="true">
          <path fill="#0066B8" d="M93.3 121.2l26.4-12.8c4.2-2 6.8-6.3 6.8-11.1V28.7c0-4.8-2.6-9.1-6.8-11.1L93.3 4.8c-3.6-1.7-7.8-1.2-10.9 1.4L37.1 43.6 18.7 29.6c-2.7-2.1-6.5-2.2-9.3-.4L2.8 33.7C.9 34.9 0 37 0 39.2v49.6c0 2.2.9 4.3 2.8 5.5l6.6 4.5c2.8 1.8 6.6 1.7 9.3-.4l18.4-14 45.3 37.4c3.1 2.6 7.3 3.1 10.9 1.4z"/>
          <path fill="#007ACC" d="M95 18l-57.9 44.5L95 107V18z"/>
          <path fill="#1F9CF0" d="M119.7 17.6L93.3 4.8c-3.6-1.7-7.8-1.2-10.9 1.4L37.1 43.6 95 91.5V18l24.7-.4z"/>
          <path fill="#005A9E" d="M119.7 110.4L95 123.2V36.5l-57.9 26 45.3 44.5c3.1 2.6 7.3 3.1 10.9 1.4l26.4-12.8v-5.2z"/>
        </svg>
      );

    case 'Firebase':
      return (
        <svg viewBox="0 0 128 128" className={className} fill="none" aria-hidden="true">
          <path fill="#FFA000" d="M20.2 92.4L35.6 17.8c.6-3 4.6-3.8 6.3-1.3l15.8 23.3-37.5 52.6z"/>
          <path fill="#F57C00" d="M57.7 39.8l12.7-24.1c1.5-2.9 5.8-2.6 6.9.5l42 76.2-61.6-52.6z"/>
          <path fill="#FFCA28" d="M12.4 97.4L20.2 92.4l37.5-52.6 13.9 26.2-59.2 31.4z"/>
          <path fill="#FFA000" d="M71.6 66l-13.9-26.2 61.6 52.6-47.7-26.4z"/>
          <path fill="#FFCA28" d="M12.4 97.4l49.2 27.5c1.5.8 3.3.8 4.8 0l48.8-27.5-43.6-31.4-59.2 31.4z"/>
        </svg>
      );

    case 'Tailwind CSS':
      return (
        <svg viewBox="0 0 128 128" className={className} fill="none" aria-hidden="true">
          <path
            fill="#38BDF8"
            d="M64 36c-16 0-26 8-30 24 6-8 13.5-11 22.5-9 5.1 1.1 8.8 4.9 12.9 9 6.6 6.8 14.3 14.6 30.6 14.6 16 0 26-8 30-24-6 8-13.5 11-22.5 9-5.1-1.1-8.8-4.9-12.9-9-6.6-6.8-14.3-14.6-30.6-14.6zm-36 28c-16 0-26 8-30 24 6-8 13.5-11 22.5-9 5.1 1.1 8.8 4.9 12.9 9 6.6 6.8 14.3 14.6 30.6 14.6 16 0 26-8 30-24-6 8-13.5 11-22.5 9-5.1-1.1-8.8-4.9-12.9-9-6.6-6.8-14.3-14.6-30.6-14.6z"
          />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 128 128" className={className} fill="none" aria-hidden="true">
          <rect width="128" height="128" rx="16" fill="#222222" />
          <circle cx="64" cy="64" r="32" stroke="#FF6D1F" strokeWidth="6" />
        </svg>
      );
  }
};
