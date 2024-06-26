import React from "react";
import insta from '/src/assets/insta.png';
import linkedIn from '/src/assets/linkedIn.png';
import mail from '/src/assets/mail.png';
import FadeInSection from '/src/components/cards/FadeInSection';
import Nav from "/src/components/Nav.jsx";
import {useRef} from 'react';
import emailjs from '@emailjs/browser';
import styled from "styled-components";


export default function ContactUs() {
    const backgroundStyle = {
        backgroundImage: 'url("src/assets/Desktop - 6.png")'
    };
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_wky1l3g', 'template_ya00om7', form.current, 'Werag2NlIplOJbVRV')
            .then((result) => {
                console.log(result.text);
                alert("Message Sent");
            }, (error) => {
                console.log(error.text);
                alert("Error! Try Again...");
            });
    };
    return (
        <section id="contact" style={backgroundStyle}>
            <section class="bg-white dark:bg-gray-900">
                <Nav/>
                <div class="py-4 lg:py-6 px-4 mx-auto max-w-screen-md content-center">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-lime-600 ">Contact
                        Us</h2>
                    <div className='border-2 border-lime-600 p-4 rounded-xl bg-gray-50 content-center'>
                        <StyledContactForm>
                            <form ref={form} onSubmit={sendEmail}>
                                <label>Name</label>
                                <input type="text" name="user_name" required/>
                                <label>Email</label>
                                <input type="email" name="user_email" required/>
                                <label>Message</label>
                                <textarea name="message" required/>
                                <input type="submit" value="Send"/>
                            </form>
                        </StyledContactForm>
                    </div>
                </div>
            </section>
            <div id="footer">
                <FadeInSection>
                    <hr class="h-0.5 my-6 bg-lime-600 border-0 dark:bg-lime-700"/>
                </FadeInSection>
                <div className="flex flex-row justify-center p-5 m-5">
                    <FadeInSection>
                        <div className="flex flex-col basis-1/2 md:p-3">
                            <div><p className="text-xl md:text-4xl lg:text-5xl font-bold text-lime-600">REACH US</p>
                            </div>
                            <div className="flex flex-row justify-start my-2"><img src={mail} alt="..."
                                                                                   className="h-7 w-7 m-1"/><p
                                className="text-xs md:text-lg lg:text-xl font-extralight m-1">contact.bitm@180dc.org</p>
                            </div>
                            <div className="flex flex-row">
                                <p className="flex flex-row text-xs md:text-lg lg:text-xl font-normal">We'd
                                    <div
                                        className="text-lime-600 text-xs md:text-lg lg:text-xl font-normal px-1">love
                                        to hear
                                    </div>
                                    from you!
                                </p>
                            </div>
                        </div>
                    </FadeInSection>
                    <div className="basis-1/2">
                    </div>
                    <FadeInSection>
                        <div className="flex flex-col md:flex-row md:justify-end basis-1/3 md:basis-1/2">
                            <div className="flex flex-row h-max items-center md:px-4">
                                <div className="items-center justify-center">
                                    <p className="text-xs md:text-lg font-extralight lg:text-xl">Follow us for
                                        more:</p>
                                </div>
                                <div className="flex flex-row">
                                    <a href="https://www.instagram.com/180dcbitmesra"
                                       target="_blank"><img
                                        src={insta} alt="..." className="h-6 w-6 md:h-14 md:w-14 md:mx-2"/></a>
                                    <a href="https://www.linkedin.com/company/180-degrees-consulting-bit-mesra/mycompany/"
                                       target="_blank"><img
                                        src={linkedIn} alt="..." className="h-6 w-6 md:h-14 md:w-14 md:mx-2"/></a>
                                </div>
                            </div>
                        </div>
                    </FadeInSection>
                </div>
                <p className='text-gray-400' style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    scale: '.9'
                }}>Copyright &copy;180 DC BIT Mesra</p>
            </div>
        </section>

    )
}

const StyledContactForm = styled.div`
    width: 100%;

    form {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        width: 100%;
        font-size: 16px;

        input {
            width: 100%;
            height: 35px;
            padding: 7px;
            outline: none;
            border-radius: 5px;
            border: 1px solid rgb(220, 220, 220);

            &:focus {
                border: 2px solid #75AA35;
            }
        }

        textarea {
            max-width: 100%;
            min-width: 100%;
            width: 100%;
            max-height: 100px;
            min-height: 100px;
            padding: 7px;
            outline: none;
            border-radius: 5px;
            border: 1px solid rgb(220, 220, 220);

            &:focus {
                border: 2px solid #75AA35;
            }
        }

        label {
            margin-top: 1rem;
        }

        input[type="submit"] {
            margin-top: 2rem;
            cursor: pointer;
            background: #75AA35;
            color: white;
            border: none;
        }
    }
`;
