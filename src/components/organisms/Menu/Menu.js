import React, {
    useState,
} from 'react';
import {
    arrayOf,
    bool,
    shape,
    string,
} from 'prop-types';

import {
    Wrapper,
} from '../../atoms';
import {
    MenuItem,
} from '../../molecules';

const Menu = (props) => {
    const {
        items,
    } = props;

    const [ selectedItem, setSelectedItem ] = useState(items[0].text);

    return (
        <Wrapper flexDirection="column">
            {
                items.map(({ isSubItem, text }, i) => (
                    <MenuItem
                        key={i}
                        isSubItem={isSubItem}
                        onClick={() => setSelectedItem(text)}
                        selected={selectedItem === text}
                        text={text}
                    />
                ))
            }
        </Wrapper>
    );
};

Menu.defaultProps = {
    items: [
        { isSubItem: false, text: 'item1' },
        { isSubItem: false, text: 'item2' },
        { isSubItem: true, text: 'sub-item1' },
        { isSubItem: true, text: 'sub-item2' },
        { isSubItem: false, text: 'item3' },
    ],
};

Menu.propTypes = {
    items: arrayOf(shape({
        isSubItem: bool,
        text: string,
    })),
};

export default Menu;
