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
                items.map(({ text }, i) => (
                    <MenuItem
                        key={i}
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
        { selected: true, text: 'item1' },
        { selected: false, text: 'item2' },
        { selected: false, text: 'item3' },
    ],
};

Menu.propTypes = {
    items: arrayOf(shape({
        selected: bool,
        text: string,
    })),
};

export default Menu;
