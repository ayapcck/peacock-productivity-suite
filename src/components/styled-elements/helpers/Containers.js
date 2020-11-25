import styled from 'styled-components';

const alignment = {
    center: 'center',
    left: 'flex-start',
    right: 'flex-end',
};

const AlignedContainer = styled.div`
    display: flex;
    height: 100%;
    justify-content: ${({ align }) => alignment[align]};
    width: 100%;
`;

const CenteredContainer = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    width: 100%;
`;

const PaddedWrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    height: 100%;
    padding: 10px;
`;

export {
    AlignedContainer,
    CenteredContainer,
    PaddedWrapper,
};
