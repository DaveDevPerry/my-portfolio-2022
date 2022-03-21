import React from 'react';
import { VscFilePdf, VscGithub } from 'react-icons/vsc';
import { HiOutlineShare } from 'react-icons/hi';
// import { VscGithub } from 'react-icons/vsc';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from '../../styles/GlobalComponents';
import {
	List,
	ListContainer,
	ListItem,
	ListParagraph,
	ListTitle,
	ContactContainer,
	FormContainer,
	Img,
	ImgFilter,
} from './ContactStyles';

import Button from '../../styles/GlobalComponents/Button';

const Contact = () => (
	<Section id='contact'>
		{/* <SectionDivider /> */}
		{/* <br /> */}
		<SectionTitle>Contact</SectionTitle>

		<br />
		<br />

		{/* <ContactContainer>
			<div className='content-container contact-section'>left</div>
			<div className='form-container contact-section'>right</div>
		</ContactContainer> */}

		<FormContainer>
			<ImgFilter id='card-filter' />
			<Img src='/images/bg_contact.png' id='contact-bg-img' />

			<div className='form-wrapper'>
				<form
					id='contact-form'
					name='contact'
					method='POST'
					action='./pages/success'
					data-netlify='true'
					data-netlify-recaptcha='true'
					autoComplete='off'
				>
					<div className='form-input'>
						<input type='text' name='name' id='name' required />
						<label htmlFor='name' className='label-name'>
							<span className='content-name'>Name</span>
						</label>
					</div>
					<div className='form-input'>
						<input type='email' name='email' id='email' required />
						<label htmlFor='email' className='label-name'>
							<span className='content-name'>Email</span>
						</label>
					</div>
					<div className='form-input'>
						<input type='text' name='subject' id='subject' required />
						<label htmlFor='subject' className='label-name'>
							<span className='content-name'>Subject</span>
						</label>
					</div>
					<div className='form-input1'>
						<label htmlFor='message' className='label-name' id='message-label'>
							<span id='contact-message'>message</span>
						</label>
						<textarea name='message' id='message' required></textarea>
					</div>

					<div className='end-form-wrapper'>
						<div className='field'>
							<div data-netlify-recaptcha='true'></div>
						</div>
						<button type='submit' id='submit-form'>
							submit
						</button>
					</div>
				</form>
			</div>
		</FormContainer>
	</Section>
);

export default Contact;
