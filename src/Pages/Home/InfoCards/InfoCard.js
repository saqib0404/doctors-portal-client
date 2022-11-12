import React from 'react';

const InfoCard = ({ card }) => {

    const { title, description, icon, bgc } = card;

    return (
        <div className={`card md:card-side ${bgc} shadow-xl py-4 md:py-2 px-4 text-white`}>
            <figure><img className='w-16' src={icon} alt="Movie" /></figure>
            <div className="card-body ">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;