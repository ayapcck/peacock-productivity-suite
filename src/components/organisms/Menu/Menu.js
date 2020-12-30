import React, {
    useState,
} from 'react';
import {
    arrayOf,
    bool,
    object,
    oneOf,
    shape,
    string,
} from 'prop-types';
import reduce from 'lodash/reduce';

import { hasPermissions } from '../../../config/permissions';
import { withAuthConsumer } from '../../../config/session';

import {
    Wrapper,
} from '../../atoms';
import {
    MenuItem,
} from '../../molecules';

const itemReducer = renderItem => (acc, item, mainKey) => {
    const {
        children,
        ...parentItem
    } = item;

    const key = `main-${mainKey}`;

    const parent = renderItem(parentItem, key);
    parent && acc.push(parent);

    children && children.forEach((child, i) => acc.push(renderItem(child, `${key}-child-${i}`, true)));

    return acc;
};

const Menu = (props) => {
    const {
        auth: { userPermissions },
        items,
        type,
    } = props;

    const [ selectedItem, setSelectedItem ] = useState(items[0].text);

    const renderItem = (item, key, isSubItem = false) => {
        const {
            destination,
            permissions,
            text,
            ...rest
        } = item;

        const onClickProps = { onClick: () => setSelectedItem(text) };
        const selectableProps = type === 'basic' || destination
            ? { ...onClickProps, selected: selectedItem === text }
            : { selected: false };

        return hasPermissions(permissions, userPermissions) && (
            <MenuItem
                { ...rest }
                { ...selectableProps }
                destination={destination}
                isSubItem={isSubItem}
                key={key}
                text={text}
            />
        );
    };

    const Items = () => reduce(
        items,
        itemReducer(renderItem),
        []
    );

    return (
        <Wrapper flexDirection="column">
            <Items />
        </Wrapper>
    );
};

Menu.defaultProps = {
    items: [
        { text: 'item1' },
        { text: 'item2' },
        {
            children: [
                { text: 'sub-item1' },
                { text: 'sub-item2' },
            ],
            text: 'parent1:',
        },
        { text: 'item3' },
    ],
    type: 'basic',
};

Menu.propTypes = {
    auth: shape({
        userPermissions: object,
    }).isRequired,
    items: arrayOf(shape({
        destination: string,
        isSubItem: bool,
        permissions: object,
        text: string,
    })),
    type: oneOf([ 'basic', 'navigation' ]),
};

export default withAuthConsumer(Menu);
