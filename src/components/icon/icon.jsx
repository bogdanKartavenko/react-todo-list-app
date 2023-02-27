export const IconMore = ({ className, size, color }) => {
    return (
        <svg
            className={className}
            width={size}
            height={size}
            viewBox="0 0 16 4"
            // fill={color}
            xmlns="http://www.w3.org/2000/svg">
            <path d="M2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM14 0C12.9 0 12 0.9 12 2C12 3.1 12.9 4 14 4C15.1 4 16 3.1 16 2C16 0.9 15.1 0 14 0ZM8 0C6.9 0 6 0.9 6 2C6 3.1 6.9 4 8 4C9.1 4 10 3.1 10 2C10 0.9 9.1 0 8 0Z" fill={color} />
        </svg>
    );
};

export const IconClose = ({ className, size, color }) => {
    return (
        <svg
            className={className}
            width={size}
            height={size}
            viewBox="0 0 14 14"
            fill={color}
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7071 1.70711C14.0976 1.31658 14.0976 0.683418 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L7 5.58579L1.70711 0.292893C1.31658 -0.0976311 0.683418 -0.0976311 0.292893 0.292893C-0.0976311 0.683418 -0.0976311 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976311 12.6834 -0.0976311 13.3166 0.292893 13.7071C0.683418 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7L13.7071 1.70711Z" fill={color} />
        </svg>

    );
};

export const IconPlus = ({ className, size, color }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 16 16"
            fill={color}
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 1C9 0.447715 8.55228 0 8 0C7.44771 0 7 0.447715 7 1V7H1C0.447715 7 0 7.44771 0 8C0 8.55228 0.447715 9 1 9H7V15C7 15.5523 7.44771 16 8 16C8.55228 16 9 15.5523 9 15V9H15C15.5523 9 16 8.55228 16 8C16 7.44771 15.5523 7 15 7H9V1Z" fill={color} />
        </svg>
    );
};