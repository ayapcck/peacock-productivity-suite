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
                variant={ selected ? 'secondary' : 'primary' }
                clickable
                hasHoverShadow
            >
                <Wrapper
                    variant={ selected ? 'secondary' : 'primary' }
                    hasPadding
                >
                    <Text
                        variant={ selected ? 'secondary' : 'primary' }
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
