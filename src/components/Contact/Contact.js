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
} from './ContactStyles';

const Contact = () => (
	<Section id='contact'>
		<SectionDivider />
		{/* <br /> */}
		<SectionTitle>Contact</SectionTitle>

		<br />

		<ContactContainer id='contact-hover'>
			<div class='contact-content-container'>
				<div class='header'>
					<h2 class='contact-me'>Get in touch with me</h2>
				</div>
				<div class='content-wrapper'>
					<p>
						If you have any questions about my services, a job opportunity,
						maybe a coding collab, or just want to say hello, I would love to
						hear from you.
						{/* <span
							class='iconify'
							data-inline='false'
							data-icon='entypo:arrow-long-right'
						></span> */}
					</p>
					<div class='dl-wrapper'>
						<VscFilePdf
							size='3rem'
							class='iconify'
							data-inline='false'
							data-icon='mdi:file-pdf-outline'
						/>
						{/* <span
							class='iconify'
							data-inline='false'
							data-icon='mdi:file-pdf-outline'
						></span> */}
						<p class='dl-text'>download my cv?</p>
					</div>
					<div class='dl-wrapper'>
						<VscGithub
							size='3rem'
							class='iconify'
							data-inline='false'
							data-icon='akar-icons:github-fill'
						/>
						{/* <span
							class='iconify'
							data-inline='false'
							data-icon='akar-icons:github-fill'
						></span> */}
						<p class='dl-text'>check out my code?</p>
					</div>
					<div class='dl-wrapper'>
						<HiOutlineShare
							size='3rem'
							class='iconify'
							id='share-it'
							data-inline='false'
							data-icon='bx:bx-share-alt'
						/>
						{/* <span
							class='iconify'
							id='share-it'
							data-inline='false'
							data-icon='bx:bx-share-alt'
						></span> */}
						<p class='dl-text'>share my portfolio?</p>
					</div>
					<p>I look forward to hearing you.</p>
				</div>
			</div>

			<div class='form-container'>
				<div class='form-wrapper'>
					<form
						id='contact-form'
						name='contact'
						method='POST'
						action='./pages/success'
						data-netlify='true'
						data-netlify-recaptcha='true'
						autocomplete='off'
					>
						<div class='form-input'>
							<input type='text' name='name' id='name' required />
							<label for='name' class='label-name'>
								<span class='content-name'>Name</span>
							</label>
						</div>
						<div class='form-input'>
							<input type='email' name='email' id='email' required />
							<label for='email' class='label-name'>
								<span class='content-name'>Email</span>
							</label>
						</div>
						<div class='form-input'>
							<input type='text' name='subject' id='subject' required />
							<label for='subject' class='label-name'>
								<span class='content-name'>Subject</span>
							</label>
						</div>
						<div class='form-input1'>
							<label for='message' class='label-name' id='message-label'>
								<span id='contact-message'>message</span>
							</label>
							<textarea name='message' id='message' required></textarea>
						</div>
						<div class='end-form-wrapper'>
							<div class='field'>
								<div data-netlify-recaptcha='true'></div>
							</div>
							<button type='submit' id='submit-form'>
								submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</ContactContainer>
	</Section>
);

export default Contact;
