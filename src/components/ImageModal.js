import React from 'react';
import styled from 'styled-components';

const ImageModal = ({ modalImgUrl }) => {
	return (
		<StyledImageModal>
			<img src={modalImgUrl} alt='screenshot' />
		</StyledImageModal>
	);
};
const StyledImageModal = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	padding: 2rem;
	background-color: white;
	width: calc(100vw - 2rem);
	height: calc(100vw - 2rem);
	transform: translate(-50%, -50%);
	img {
		width: 100%;
		aspect-ratio: 1/1;
	}
`;

export default ImageModal;
