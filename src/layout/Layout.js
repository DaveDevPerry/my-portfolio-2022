import React from 'react';
import styled from 'styled-components';

import Footer from '../components/Footer';
import Header from '../components/Header';

export const Layout = ({ children }) => {
	return (
		<LayoutContainer>
			<Header />
			<main>{children}</main>
			<Footer />
		</LayoutContainer>
	);
};
const LayoutContainer = styled.div`
	max-width: 1280px;
	width: 100%;
	margin: auto;
`;
