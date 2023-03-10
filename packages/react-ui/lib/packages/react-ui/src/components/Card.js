import React from 'react';
import './style.scss.js';

const Card = ({ title = "...", children = null, }) => {
    return (React.createElement("div", { className: "card-container" },
        React.createElement("h2", null, title),
        React.createElement("div", null, children)));
};

export { Card, Card as default };
//# sourceMappingURL=Card.js.map
