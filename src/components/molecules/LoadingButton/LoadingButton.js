import React from 'react';
import {
    bool,
    func,
    oneOf,
} from 'prop-types';

import { withLoading } from '../../../logics';

import {
    Button,
    Spinner,
    Wrapper,
} from '../../atoms';

const LoadingButton = (props) => {
    const {
        isLoading,
        onClick,
        variant,
    } = props;

    const content = (
        <Wrapper justify="center">
            <Spinner variant={variant} />
        </Wrapper>
    );

    return (
        <Button
            onClick={onClick}
            type="submit"
            variant={variant}
        >
            { isLoading ? content : null }
        </Button>
    );
};

LoadingButton.defaultProps = {
    onClick: () => null,
    text: null,
    variant: 'primary',
};

LoadingButton.propTypes = {
    /** Whether or not the application is loading */
    isLoading: bool.isRequired,
    /** Function called when button is pressed */
    onClick: func,
    /** Variant determines which color set to use. One of: */
    variant: oneOf([ 'primary', 'secondary', 'tertiary' ]),
};

export default withLoading(LoadingButton);
