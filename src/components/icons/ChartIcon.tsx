import { IconProps } from './types';

export const ChartIcon = ({
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
                padding: '4px 6px',
                alignItems: 'center',
                gap: '10px',
            }}
        >

            <path d="M18 20V10M12 20V4M6 20V14"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round" />
        </svg>



    );
};