import { IconProps } from './types';

export const X_Icon = ({
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
                display: 'inline-flex',
                padding: '6px',
                alignItems: 'center',
                gap: '10px',
            }}
        >



            <path d="M18 6L6 18M6 6L18 18"


                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round" />
        </svg>



    );
};