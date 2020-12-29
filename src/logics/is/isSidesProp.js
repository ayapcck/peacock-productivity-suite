import isArray from 'lodash/isArray';

const isSidesProp = (props, propName, componentName) => {
    const value = props[propName];
    const sides = [ 'bottom', 'left', 'right', 'top' ];

    if (value === 'all' || value === 'none') return null;
    if (isArray(value)) {
        const errors = [];
        value.forEach(sideItem => !sides.includes(sideItem) &&
                errors.push(`Invalid prop '${sideItem}' supplied to ${componentName}'s '${propName}' prop. Validation failed`));
        if (errors.length !== 0) return new Error(errors[0]);
    }
    return null;
};

export default isSidesProp;
