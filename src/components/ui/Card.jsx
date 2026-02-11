import React from 'react';
import PropTypes from 'prop-types';
import '../../design/utilities.css';

/**
 * Card Component
 * Glass-morphism card with optional hover effects
 */
const Card = ({
    children,
    className = '',
    withGlow = false,
    ...props
}) => {
    const baseStyles = 'glass-panel p-6';
    const glowStyles = withGlow ? 'hover-glow' : '';

    const cardClasses = `${baseStyles} ${glowStyles} ${className}`;

    return (
        <div className={cardClasses} {...props}>
            {children}
        </div>
    );
};

Card.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    withGlow: PropTypes.bool,
};

export default Card;
