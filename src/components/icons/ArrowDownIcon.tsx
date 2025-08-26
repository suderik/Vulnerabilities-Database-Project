import { IconProps } from './types';

export const ArrowDownIcon = ({
    size = 24,
    color = 'var(--color-green-500)',
    className = '',
}: IconProps) => {
    return (
        <svg
            className={className}
            width={size}
            height={(size * 24) / 24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
                display: 'flex',
                width: '24px',
                padding: '9px 6px',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '10px',
            }}
        >



            <path d="M6 9L12 15L18 9"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round" />

        </svg>




    );
};