import React from 'react';
import PropTypes from 'prop-types';
import '../../design/utilities.css';

/**
 * Container Component
 * Responsive container with max-width and auto margins
 */
const Container = ({
    children,
    className = '',
    ...props
}) => {
    const containerClasses = `max-w-container mx-auto px-4 ${className}`;

    return (
        <div className={containerClasses} {...props}>
            {children}
        </div>
    );
};

Container.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Container;
