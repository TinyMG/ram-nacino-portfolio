import React from 'react';
import PropTypes from 'prop-types';
import '../../design/utilities.css';

/**
 * Button Component
 * Stitch-based button with multiple variants
 */
const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    ...props
}) => {
    const baseStyles = 'inline-block font-bold cursor-pointer transition-all rounded-full';

    const variants = {
        primary: 'btn-primary',
        secondary: 'btn-secondary',
        ghost: 'btn-ghost',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-4 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    const buttonClasses = `btn ${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (props.href) {
        return (
            <a className={buttonClasses} {...props}>
                {children}
            </a>
        );
    }

    return (
        <button className={buttonClasses} {...props}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['primary', 'secondary', 'ghost']),
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    className: PropTypes.string,
};

export default Button;
