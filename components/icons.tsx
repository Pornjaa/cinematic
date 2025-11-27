import React from 'react';

type IconProps = {
  className?: string;
};

export const FilmIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
  </svg>
);

export const FacebookIcon: React.FC<IconProps> = ({ className }) => (
  <svg fill="currentColor" viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

export const YoutubeIcon: React.FC<IconProps> = ({ className }) => (
    <svg fill="currentColor" viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path fillRule="evenodd" d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.701V8.115l6.54 3.385-6.54 3.385z" clipRule="evenodd" />
    </svg>
);

export const TiktokIcon: React.FC<IconProps> = ({ className }) => (
    <svg fill="currentColor" viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.05-4.85-.38-6.95-1.45-1.94-1-3.47-2.52-4.51-4.42-1.13-2.04-1.54-4.42-1.4-6.84.14-2.42.88-4.73 2.19-6.65 1.34-1.95 3.28-3.41 5.48-4.23 2.05-.76 4.26-.95 6.45-.63.03 1.49-.05 2.98-.02 4.48-.18.01-.36.01-.54.01-1.32 0-2.6-.29-3.8-.75-.3-.11-.58-.26-.88-.38v4.4c.18.02.35.04.53.05.88.08 1.76.12 2.64.09.28-.01.56-.04.83-.06v4.35c-.17.03-.34.05-.5.08-.8.12-1.6.19-2.4.15-.22-.01-.44-.03-.66-.05L12 21.04v-9.6c-.01-1.22-.03-2.44-.03-3.66.01-1.22.02-2.43.02-3.65z"/>
    </svg>
);