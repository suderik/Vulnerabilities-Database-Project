import { IconProps } from './types';

export const TickIcon = ({
    size = 24,
    color = 'var(--color-green-500)',
    className = '',
}: IconProps) => {
    return (
        <svg
            className={className}
            width={size}
            height={(size * 23) / 24}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
                display: 'flex',
                width: '24px',
                padding: '6px 4px',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '10px',
            }}
        >

            <path d="M20 6L9 17L4 12"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round" />
        </svg>




    );
};