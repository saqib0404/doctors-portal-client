import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import PrimaryButton from '../../../components/PrimaryButton';

const DentalCare = () => {
    return (
        <div className="hero mt-16">
            <div className="hero-content justify-around flex-col lg:flex-row">
                <img src={treatment} className="lg:w-4/12 rounded-lg shadow-2xl" alt='' />
                <div className='lg:w-5/12'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Learn More</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default DentalCare;