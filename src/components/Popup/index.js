import React from 'react';
import {
    bool,
    func,
    node,
} from 'prop-types';
import styled from 'styled-components';

import {
    Icon,
} from '../atoms';

const CenterPanel = styled.div`
    background-color: ${({ theme }) => theme.backgroundColor};
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 ${({ theme }) => theme.shadowColor};
    box-sizing: border-box;
    height: ${({ tall }) => tall ? '60%' : '30%'};
    margin: auto;
    padding: 10px;
    position: relative;
    transition: 0.3s;
    width: 30%;

    &:hover {
        box-shadow: 0 8px 16px 0 ${({ theme }) => theme.shadowColor};
    }
`;

const CloseIcon = styled(Icon)`
    position: absolute;
    right: 10px;
    border-radius: 15px;
    box-shadow: 0 2px 4px 0 ${({ theme }) => theme.shadowColor};
    top: 10px;
    transition: 0.3s;

    &:hover {
        color: ${({ theme }) => theme.hoverColor};
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
    position: absolute;
    top: 0;
    width: 100%;
`;

const Popup = (props) => {
    const {
        closePopup,
        popupContent,
        tall,
    } = props;

    return (
        <PanelContainer>
            <OpaqueBackground onClick={closePopup} />
            <CenterPanel tall={tall}>
                <CloseIcon 
                    onClick={closePopup}
                    icon={[ 'far', 'times-circle' ]} 
                />
                {popupContent}
            </CenterPanel>
        </PanelContainer>
    );
};

Popup.defaultProps = {
    popupContent: <div></div>,
    tall: true,
};

Popup.propTypes = {
    closePopup: func, 
    popupContent: node,
    tall: bool,
};

export default Popup;
