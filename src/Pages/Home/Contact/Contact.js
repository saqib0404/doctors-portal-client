import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton';
import './Contact.css';

const Contact = () => {
    return (
        <div className='mt-32 contact-section'>
            <div className='py-4'>
                <h2 className='text-center text-xl font-bold text-primary'>Contact Us</h2>
                <h2 className='text-center text-3xl text-white'>Stay connected with us</h2>
            </div>
            <div className='w-9/12 md:w-7/12 lg:w-5/12 mx-auto py-6'>
                <input type="text" placeholder="Email Address" className="input w-full mb-2" /> <br />
                <input type="text" placeholder="Subject" className="input w-full mb-2" /> <br />
                <textarea className="textarea w-full mb-6" placeholder="Your message"></textarea>
                <div className='flex justify-center'>
                <PrimaryButton>Submit</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Contact;