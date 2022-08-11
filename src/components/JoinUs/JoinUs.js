import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { 
    JoinusContainer,
    LeftJ,
    TextContainerJ,
    TextJ,
    RightJ,
    FormJ,
    InputJ,
    ButtonJ
 } from './JoinsUsStyled'

const JoinUs = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_fg88ec8', 'template_w90tlj4', form.current, '0m7q3zOB1Eaj4muH6')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <JoinusContainer>
        <LeftJ>
            <hr></hr>
            <TextContainerJ>
            <TextJ className='stroke-text'>READY TO </TextJ>
            <TextJ>LEVEL UP</TextJ>
            </TextContainerJ>

            <TextContainerJ>
            <TextJ>YOUR BODY </TextJ>
            <TextJ className='stroke-text'>WITH US</TextJ>
            </TextContainerJ>
        </LeftJ>
        <RightJ>
            <FormJ ref={form} onSubmit={sendEmail}>
                <InputJ type="email" name="user_email" placeholder='Enter your Email address'></InputJ>
                <ButtonJ onClick={sendEmail }>Join now</ButtonJ>
            </FormJ>
        </RightJ>
    </JoinusContainer>
  )
}

export default JoinUs