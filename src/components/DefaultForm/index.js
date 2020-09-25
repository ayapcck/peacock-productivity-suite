import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../subcomponents/Button';

const StyledDefaultForm = styled.form`
    display: flex;
    flex-direction: column;
    padding: 10px;
`;

const Title = styled.h2`
    color: ${({ theme }) => theme.textColor};
    text-align: center;
`;

const DefaultForm = (props) => {
    const {
        children,
        onSubmit,
        title
    } = props;
    
    return (
        <StyledDefaultForm onSubmit={onSubmit}>
            <Title>{title}</Title>
            {children}
            <Button type="submit" />
        </StyledDefaultForm>
    );
};

DefaultForm.defaultProps = {
    title: 'Title'
};

DefaultForm.propTypes = {
    title: PropTypes.string
};

export default DefaultForm;
