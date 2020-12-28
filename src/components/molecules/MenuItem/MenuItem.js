import React from 'react';
import {
    bool,
    func,
    string,
} from 'prop-types';

import {
    Card,
    Text,
} from '../../atoms';

const MenuItem = (props) => {
    const {
        onClick,
        selected,
        text,
    } = props;

    return (
        <Card
            hasShadow={selected}
            onClick={onClick}
            variant={ selected ? 'secondary' : 'primary' }
            clickable
            hasHoverShadow
        >
            <Text
                variant={ selected ? 'secondary' : 'primary' }
            >
                { text }
            </Text>
        </Card>
    );
};

MenuItem.defaultProps = {
    onClick: () => null,
    selected: false,
    text: 'Test',
};

MenuItem.propTypes = {
    onClick: func,
    selected: bool,
    text: string,
};

export default MenuItem;
