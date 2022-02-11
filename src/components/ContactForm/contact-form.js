import { useForm, ValidationError } from '@formspree/react';
import {
	SectionTitle,
	Section,
	SectionText,
} from '../../styles/GlobalComponents';
import { InfoText } from '../ContactForm/ContactFormStyles';
import {
	FormContainer,
	ImgFilter,
	Img,
	FormButton,
	ContactText,
} from './ContactFormStyles';

export default function ContactForm() {
	// const [state, handleSubmit] = useForm(process.env.YOUR_FORM_ID);
	const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM);

	if (state.succeeded) {
		return (
			<p style={{ textAlign: 'center', padding: '20px', fontSize: '22px' }}>
				Thank you for your message. I will get back to you shortly!
			</p>
		);
	}

	return (
		<Section id='contact'>
			<SectionTitle>Contact Me</SectionTitle>
			<SectionText>
				I am actively looking for job, project and collaboration opportunities.
				I would love to hear from you and welcome any feedback on my portfolio.
			</SectionText>
			{/* <InfoText>
				I would love to hear from you and welcome any feedback on my portfolio.
			</InfoText> */}

			<FormContainer>
				<ImgFilter id='card-filter' />
				<Img src='/images/bg_contact.png' id='contact-bg-img' />
				<div className='form-wrapper'>
					<form
						id='contact-form'
						name='contact'
						method='POST'
						onSubmit={handleSubmit}
					>
						<div className='form-input'>
							<input type='text' name='name' id='name' required />
							<ValidationError
								prefix='Name'
								field='name'
								errors={state.errors}
							/>
							<label htmlFor='name' className='label-name'>
								<span className='content-name'>Name</span>
							</label>
						</div>
						<div className='form-input'>
							<input type='email' name='email' id='email' required />
							<ValidationError
								prefix='Email'
								field='email'
								errors={state.errors}
							/>
							<label htmlFor='email' className='label-name'>
								<span className='content-name'>Email</span>
							</label>
						</div>
						<div className='form-input'>
							<input type='text' name='subject' id='subject' required />
							<label htmlFor='subject' className='label-name'>
								<ValidationError
									prefix='Subject'
									field='subject'
									errors={state.errors}
								/>
								<span className='content-name'>Subject</span>
							</label>
						</div>
						<div className='form-input1'>
							<label
								htmlFor='message'
								className='label-name'
								id='message-label'
							>
								<span id='contact-message'>message</span>
							</label>
							<textarea name='message' id='message' required></textarea>
							<ValidationError
								prefix='Message'
								field='message'
								errors={state.errors}
							/>
						</div>

						<div className='end-form-wrapper'>
							<FormButton
								type='submit'
								id='submit-form'
								disabled={state.submitting}
							>
								Submit
							</FormButton>
							{/* <button
								type='submit'
								id='submit-form'
								disabled={state.submitting}
							>
								Submit
							</button> */}
							<ValidationError errors={state.errors} />
						</div>
					</form>
					{/* <form onSubmit={handleSubmit}> */}
					{/* <label htmlFor='email'>Email Address</label> */}
					{/* <input id='email' type='email' name='email' /> */}
					{/* <ValidationError prefix='Email' field='email' errors={state.errors} /> */}
					{/* <textarea id='message' name='message' /> */}
					{/* <ValidationError
						prefix='Message'
						field='message'
						errors={state.errors}
					/> */}
					{/* <button type='submit' disabled={state.submitting}>
						Submit
					</button> */}
					{/* <ValidationError errors={state.errors} /> */}
					{/* </form> */}
				</div>
			</FormContainer>
		</Section>
	);
}

{
	/* <FormContainer>
<form onSubmit={handleSubmit}>
	<label htmlFor='email'>Email Address</label>
	<input id='email' type='email' name='email' />
	<ValidationError prefix='Email' field='email' errors={state.errors} />
	<textarea id='message' name='message' />
	<ValidationError
		prefix='Message'
		field='message'
		errors={state.errors}
	/>
	<button type='submit' disabled={state.submitting}>
		Submit
	</button>
	<ValidationError errors={state.errors} />
</form>
</FormContainer> */
}
