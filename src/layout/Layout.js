import React from 'react';
import styled from 'styled-components';

import Footer from '../components/Footer';
import Header from '../components/Header';
// import ImageModal from '../components/ImageModal';

export const Layout = ({ children }) => {
	// export const Layout = ({ children, modalImgUrl, setModalImgUrl }) => {
	return (
		<LayoutContainer>
			{/* <ImageModal modalImgUrl={modalImgUrl} /> */}
			<Header />
			<main className='gridify tiny'>{children}</main>
			{/* <main className='gridify tiny'>{children}</main> */}
			<Footer />
		</LayoutContainer>
	);
};
const LayoutContainer = styled.div`
	max-width: 1280px;
	width: 100%;
	margin: auto;
`;
