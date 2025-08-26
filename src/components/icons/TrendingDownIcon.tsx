import { IconProps } from './types';

export const TrendingDownIcon = ({
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
                width: '24px',
                height: '24px',
                flexShrink: '0',
            }}
        >

            <path d="M16 7H22M22 7V13M22 7L13.5 15.5L8.5 10.5L2 17"


                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round" />
        </svg >



    );
};