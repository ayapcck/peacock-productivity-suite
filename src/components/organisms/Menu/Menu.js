import React, {
    useState,
} from 'react';
import { useSelector } from 'react-redux';
import {
    arrayOf,
    bool,
    func,
    object,
    shape,
    string,
} from 'prop-types';
import reduce from 'lodash/reduce';

import { hasPermissions } from '../../../config/permissions';

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
        items,
    } = props;

    const [ selectedItem, setSelectedItem ] = useState(items[0].text);

    const userPermissions = useSelector(state => state.permissions);

    const renderItem = (item, key, isSubItem = false) => {
        const {
            onClick,
            permissions,
            text,
            selectable,
            ...rest
        } = item;

        const clickMenuItem = () => {
            selectable && setSelectedItem(text);
            onClick();
        };

        return hasPermissions(permissions, userPermissions) && (
            <MenuItem
                { ...rest }
                isSubItem={isSubItem}
                key={key}
                onClick={clickMenuItem}
                selected={selectedItem === text}
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
};

Menu.propTypes = {
    auth: shape({
        userPermissions: object,
    }).isRequired,
    items: arrayOf(shape({
        isSubItem: bool,
        onClick: func,
        permissions: object,
        text: string,
    })),
};

export default Menu;
