import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {

    const serviceInfo = [
        {
            id: 1,
            title: 'Fluoride Treatment',
            des: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: fluoride
        },
        {
            id: 2,
            title: 'Cavity Filling',
            des: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: cavity
        },
        {
            id: 3,
            title: 'Teeth Whitening',
            des: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: whitening
        }
    ]

    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h2 className='text-xl font-bold text-primary'>Our Services</h2>
                <h2 className='text-3xl '>Services We Provide</h2>
            </div>
            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8'>
                {
                    serviceInfo.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>

        </div>
    );
};

export default Services;