import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {

    const cardInfo = [
        {
            id: 1,
            title: "Opening Hours",
            description: "Opens from 9.00 am to 5.00 pm",
            icon: clock,
            bgc: ' bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            title: "Our Location",
            description: "Uttara, Dhaka, Bangladesh",
            icon: marker,
            bgc: ' bg-accent'
        },
        {
            id: 3,
            title: "Contact Us",
            description: "++8891235612",
            icon: phone,
            bgc: ' bg-gradient-to-r from-primary to-secondary'
        },
    ]

    return (
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {
                cardInfo.map(card => <InfoCard
                    key={card.id}
                    card={card}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;