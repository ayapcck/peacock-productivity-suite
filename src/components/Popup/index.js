import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { farTimesCircle } from '@fortawesome/free-solid-svg-icons';

const CenterPanel = styled.div`
    background-color: ${({ theme }) => theme.backgroundColor};
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 ${({ theme }) => theme.shadowColor};
    box-sizing: border-box;
    height: ${({ tall }) => tall ? `60%` : `30%`};
    margin: auto;
    padding: 10px;
    position: relative;
    transition: 0.3s;
    width: 30%;

    &:hover {
        box-shadow: 0 8px 16px 0 ${({ theme }) => theme.shadowColor};
    }
`;

const CloseIcon = styled(FontAwesomeIcon)`
    color: ${({ theme }) => theme.textColor};
    position: absolute;
    right: 10px;
    border-radius: 15px;
    box-shadow: 0 2px 4px 0 ${({ theme }) => theme.shadowColor};
    top: 10px;
    transition: 0.3s;

    &:hover {
        color: ${({ theme }) => theme.hoverColor};
        cursor: pointer;
    }
`;

const OpaqueBackground = styled.div`
    background-color: ${(props) => props.theme.overlayColor};
    height: 100%;
    opacity: 0.5;
    position: absolute;
    width: 100%;
`;

const PanelContainer = styled.div`
    display: flex;
    height: 100%;
`;

const Popup = (props) => {
    const {
        popupContent,
        tall
    } = props;

    return (
        <PanelContainer>
            <OpaqueBackground />
            <CenterPanel tall={tall}>
                <CloseIcon icon={['far', 'times-circle']} />
                {popupContent}
            </CenterPanel>
        </PanelContainer>
    );
};

Popup.defaultProps = {
    popupContent: '',
    tall: true
};

export default Popup;
