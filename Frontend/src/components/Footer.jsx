import insta from "/src/assets/insta.png";
import linkedIn from "/src/assets/linkedInFooter.png";
import mail from "/src/assets/mail.png";
import React, { useState } from "react";

export default function Footer() {
    const [email, setEmail] = useState("");

    const handleSubscribe = async () => {
        try {
            const response = await fetch("http://localhost:8000/api/v1/users/subscribe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email })
            });
            if (response.ok) {
                console.log("Subscription successful!");
            } else {
                console.error("Failed to subscribe:", response.statusText);
            }
        } catch (error) {
            console.error("Error subscribing:", error.message);
        }
    };

    return (
        <footer id="footer" className="bottom-0">
            <hr class="h-1 my-6 bg-lime-600 border-0 dark:bg-lime-700"/>

            <div className="flex flex-col md:flex-row bg-white">
                <div className="flex flex-col basis-1/2 md:p-3 md:justify-start">
                    <div>
                        <p className="text-xl md:text-4xl lg:text-5xl font-bold text-center text-lime-600">
                            CONTACT US
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center my-2 ">
                        <div className="flex flex-row justify-start items-center">
                            <a href="mailto:contact.bitm@180dc.org"><img src={mail} alt="..." className="h-7 w-7 m-1"/></a>
                            <p className="text-xs md:text-lg lg:text-xl font-extralight m-1">
                                contact.bitm@180dc.org
                            </p>
                        </div>
                        <div className="flex flex-row justify-start items-center">
                            <a href="https://www.linkedin.com/company/180-degrees-consulting-bit-mesra/mycompany/"
                               target="_blank" rel="noopener noreferrer"><img
                                src={linkedIn} alt="..." className="h-7 w-7 m-1"/></a>
                            <p className="text-xs md:text-lg lg:text-xl font-extralight m-1">
                                180dcbitmesra
                            </p>
                        </div>
                        <div className="flex flex-row justify-start items-center">
                            <a href="https://www.instagram.com/180dcbitmesra" target="_blank" rel="noopener noreferrer">
                                <img src={insta} alt="Instagram" className="h-7 w-7 m-1"/>
                            </a>
                            <p className="text-xs md:text-lg lg:text-xl font-extralight m-1">
                                180dcbitmesra
                            </p>
                        </div>

                    </div>
                </div>

                <div className="basis-1/2 md:basis-1/3 md:ml-auto justify-center align-middle text-lime-600 font-bold ">
                    <h1 className='hidden md:block' style={{
                        position: 'relative',
                        top: '12%',
                        left: '51%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: '2',
                    }}>Subscribe to 180 DC BITM Newsletter</h1>
                    <div className="flex justify-center my-4">
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-gray-300 rounded-md px-4 py-2 mr-2 focus:outline-none focus:border-lime-600"
                />
                <button
                    onClick={handleSubscribe}
                    className="bg-lime-600 text-white rounded-md px-4 py-2 focus:outline-none hover:bg-lime-700"
                >
                    Subscribe
                </button>
            </div>
                </div>
            </div>
            <p className='text-gray-400' style={{
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                scale:'.9'
            }}>Copyright &copy;180 DC BIT Mesra</p>
        </footer>
    );
}
