import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import image from '../../../assets/images/people1.png'
import Testimonial from './Testimonial';

const Testimonials = () => {

    const testimnials = [
        {
            id: 1,
            img: image,
            des: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Winson Herry',
            location: 'California'
        },
        {
            id: 2,
            img: image,
            des: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Winson Herry',
            location: 'California'
        },
        {
            id: 3,
            img: image,
            des: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Winson Herry',
            location: 'California'
        }
    ]

    return (
        <section className='mt-20 md:mx-10'>
            <div className='flex justify-between items-center'>
                <div>
                    <h2 className='text-xl font-bold text-primary'>Testimonial</h2>
                    <h2 className='text-4xl'>What Our Patients Says</h2>
                </div>
                <img className='w-20 lg:w-40' src={quote} alt="" />
            </div>
            <div className='mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {
                    testimnials.map(testimonial => <Testimonial
                        key={testimonial.id}
                        msg={testimonial}
                    ></Testimonial>)
                }
            </div>
        </section>
    );
};

export default Testimonials;