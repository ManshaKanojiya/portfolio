'use client'
import { CiLocationOn } from "react-icons/ci";
import { useState } from 'react';
import { CiPhone } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement form submission logic here (e.g., sending the form data to an API or email service)
        console.log('Form submitted:', formData);
    };

    return (
        <div className="flex flex-col md:flex-row p-6 space-y-6 md:space-y-0 md:space-x-6 items-center justify-center">
            {/* Common Container */}
            <div className="flex flex-col md:flex-row w-full max-w-6xl p-6 space-y-6 md:space-y-0 md:space-x-6 bg-extra border border-gray-300 shadow-lg rounded-lg">

                {/* Contact Me Details */}
                <div className="flex-1 bg-extra p-6 shadow-md rounded-lg flex lg:gap-15 md:gap:10 sm:gap:10 flex-col items-center">
                    <h2 className="lg:text-4xl md:text-3xl sm:text-3xl text-button text-center font-bold mb-4">Contact Me</h2>
                    <div className="flex flex-col items-center justify-center gap-5 p-6 bg-extra shadow-md rounded-lg  ">
                        <p className="lg:text-xl sm:text-sm font-medium text-button flex justify-center items-center">
                            <div className="w-12 h-12 border-2 border-gray-500 rounded-full flex items-center justify-center mr-2">
                                <CiPhone />
                            </div>
                            Contact Number: +91 8957600183
                        </p>
                        <p className="lg:text-xl sm:text-sm font-medium text-button flex justify-center items-center">
                            <div className="w-12 h-12 border-2 border-gray-500 rounded-full flex items-center justify-center mr-2">
                                <MdOutlineMail />
                            </div>
                            Email: kanojiya1918@gmail.com
                        </p>
                        <p className="lg:text-xl sm:text-sm font-medium text-button flex justify-center items-center">
                            <div className="w-12 h-12 border-2 border-gray-500 rounded-full flex items-center justify-center mr-2">
                                <CiLocationOn />
                            </div>
                            Address: Andheri West
                        </p>
                    </div>

                </div>

                {/* Contact Us Form */}
                <div className="flex-1 text-button bg-extra p-6 shadow-md rounded-lg">

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-button">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-1 block w-full border border-gray-300  shadow-sm p-2"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-button">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-1 block w-full border border-gray-300 shadow-sm p-2"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-button">Contact Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="mt-1 block w-full border border-gray-300  shadow-sm p-2"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-button">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="mt-1 block w-full border border-gray-300  shadow-sm p-2"
                                rows="4"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-background text-button p-2  hover:bg-background-dark"
                        >
                            Send
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
}
