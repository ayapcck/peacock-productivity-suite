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
import NavLink from '../NavLink';

const MenuItem = (props) => {
    const {
        destination,
        isSubItem,
        onClick,
        selected,
        text,
    } = props;

    const variant = selected ? 'secondary' : 'primary';
    const Item = () => (
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
    );

    return (
        <Wrapper
            borders={isSubItem ? [ 'left' ] :  'none'}
            margins={isSubItem ? [ 'left' ] : 'none' }
            value="unset"
        >
            {
                destination
                    ? (
                        <NavLink destination={destination}>
                            <Item />
                        </NavLink>
                    ) : (
                        <Item />
                    )
            }
        </Wrapper>
    );
};

MenuItem.defaultProps = {
    destination: null,
    isSubItem: false,
    onClick: () => null,
    selected: false,
    text: 'Test',
};

MenuItem.propTypes = {
    destination: string,
    isSubItem: bool,
    onClick: func,
    selected: bool,
    text: string,
};

export default MenuItem;
