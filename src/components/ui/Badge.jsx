import React from 'react';
import PropTypes from 'prop-types';
import '../../design/utilities.css';

/**
 * Badge Component
 * Pill-shaped badge for tech stack and tags
 */
const Badge = ({
    children,
    variant = 'default',
    className = '',
    ...props
}) => {
    const baseStyles = 'inline-block px-4 py-2 text-sm rounded-xl transition-fast';

    const variants = {
        default: 'bg-[var(--bg-glass)] border border-[var(--border-color)] text-[var(--text-secondary)]',
        primary: 'bg-[var(--primary)] text-[#000]',
        secondary: 'bg-[var(--secondary)] text-white',
    };

    const badgeClasses = `${baseStyles} ${variants[variant]} ${className}`;

    return (
        <span className={badgeClasses} {...props}>
            {children}
        </span>
    );
};

Badge.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['default', 'primary', 'secondary']),
    className: PropTypes.string,
};

export default Badge;
