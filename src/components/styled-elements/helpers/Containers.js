import styled, { css } from 'styled-components';

const alignment = {
    center: 'center',
    left: 'flex-start',
    right: 'flex-end',
};

const maxContent = css`
	height: 100%;
    width: 100%;
`;

const AlignedContainer = styled.div`
	${maxContent}

    display: flex;
    justify-content: ${({ align }) => alignment[align]};
`;

const CenteredContainer = styled.div`
	${maxContent}

    align-items: center;
    display: flex;
    justify-content: center;
`;

const FlexColumn = styled.div`
	${maxContent}

	display: flex;
    flex-direction: column;
`;

const PaddedWrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    height: 100%;
    padding: 10px;
`;

const PullRight = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
`;

export {
    AlignedContainer,
    CenteredContainer,
    FlexColumn,
    PaddedWrapper,
    PullRight,
};
