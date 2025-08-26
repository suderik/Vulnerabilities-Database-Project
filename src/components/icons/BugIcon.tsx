import { IconProps } from './types';

export const BugIcon = ({
    size = 24,
    color = 'var(--color-green-500)',
    className = '',
}: IconProps) => {
    return (
        <svg
            className={className}
            width={size}
            height={(size * 23) / 24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
                display: 'flex',
                padding: '2px',
                flexDirection: 'column',
                alignItems: 'felx-start',
                gap: '10px',
            }}
        >


            <path d="M8 2L9.88 3.88M14.12 3.88L16 2M9 7.13V6.13C8.98187 5.72475 9.04604 5.32002 9.18863 4.94025C9.33122 4.56048 9.54927 4.21353 9.82963 3.92035C10.11 3.62717 10.4468 3.39383 10.8199 3.23441C11.1929 3.07499 11.5943 2.9928 12 2.9928C12.4057 2.9928 12.8071 3.07499 13.1801 3.23441C13.5532 3.39383 13.89 3.62717 14.1704 3.92035C14.4507 4.21353 14.6688 4.56048 14.8114 4.94025C14.954 5.32002 15.0181 5.72475 15 6.13V7.13M12 20C8.7 20 6 17.3 6 14V11C6 9.93913 6.42143 8.92172 7.17157 8.17157C7.92172 7.42143 8.93913 7 10 7H14C15.0609 7 16.0783 7.42143 16.8284 8.17157C17.5786 8.92172 18 9.93913 18 11V14C18 17.3 15.3 20 12 20ZM12 20V11M6.53 9C4.6 8.8 3 7.1 3 5M6 13H2M3 21C3 18.9 4.7 17.1 6.8 17M20.97 5C20.97 7.1 19.37 8.8 17.47 9M22 13H18M17.2 17C19.3 17.1 21 18.9 21 21"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round" />
        </svg>



    );
};