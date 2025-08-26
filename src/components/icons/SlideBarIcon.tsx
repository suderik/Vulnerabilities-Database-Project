import { IconProps } from './types';

export const SlideBarIcon = ({
    size = 24,
    color = 'var(--color-green-500)',
    className = '',
}: IconProps) => {
    return (
        <svg
            className={className}
            width={size}
            height={(size * 24) / 24}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
                display: 'inline-flex',
                padding: '2px 3px',
                alignItems: 'center',
                gap: '10px',
            }}
        >
            <path d="M21 4H14M10 4H3M21 12H12M8 12H3M21 20H16M12 20H3M14 2V6M8 10V14M16 18V22"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round" 
                />
        </svg>


    );
};