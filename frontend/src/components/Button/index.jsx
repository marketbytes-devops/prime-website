const Button = ({ children, onClick, className, disabled }) => {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 rounded-md ${className}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;