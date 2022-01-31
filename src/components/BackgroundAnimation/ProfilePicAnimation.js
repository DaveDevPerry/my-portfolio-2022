import React from 'react';
// import { Img } from '../Projects/ProjectsStyles';

const ProfilePicAnimation = () => {
	// new hoverEffect({
	// 	parent: document.querySelector('.img1'),
	// 	image1: './1.jpg',
	// 	image2: './2.jpg',
	// 	displacementImage: './displacement-img/4.png',
	// 	// imagesRatio: '.94',
	// });

	return (
		<div>
			{/* <div className='img1 img'></div> */}
			<img
				className='img1 img'
				src='../images/1.jpg'
				style={{ height: '500px', width: '500px' }}
			/>
			{/* <Img
				className='img1 img'
				src='../images/1.jpg'
				style={{ height: '500px', width: '500px' }}
			/> */}
			{/* <div className='img1 img' src='../images/1.jpg' /> */}
		</div>
	);
};

export default ProfilePicAnimation;
