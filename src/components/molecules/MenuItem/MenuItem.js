import React from 'react';
import {
    bool,
    func,
    string,
} from 'prop-types';

import {
    Card,
    Text,
    Wrapper,
} from '../../atoms';

const MenuItem = (props) => {
    const {
        isSubItem,
        onClick,
        selected,
        text,
    } = props;

    const variant = selected ? 'secondary' : 'primary';

    return (
        <Wrapper
            borders={isSubItem ? [ 'left' ] :  'none'}
            margins={isSubItem ? [ 'left' ] : 'none' }
            value="unset"
        >
            <Card
                hasShadow={selected}
                onClick={onClick}
                value={1}
                variant={variant}
                clickable
                hasHoverShadow
            >
                <Wrapper
                    variant={variant}
                    hasPadding
                >
                    <Text
                        variant={variant}
                    >
                        { text }
                    </Text>
                </Wrapper>
            </Card>
        </Wrapper>
    );
};

MenuItem.defaultProps = {
    isSubItem: false,
    onClick: () => null,
    selected: false,
    text: 'Test',
};

MenuItem.propTypes = {
    isSubItem: bool,
    onClick: func,
    selected: bool,
    text: string,
};

export default MenuItem;
