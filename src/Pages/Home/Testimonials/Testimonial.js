import React from 'react';

const Testimonial = ({ msg }) => {
    const { img, des, name, location } = msg;
    return (
        <div className="card  shadow-xl">
            <div className="card-body">
                <p>{des}</p>
                <div className="flex items-center mt-6">
                    <div className="avatar">
                        <div className="w-16 mr-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt='' />
                        </div>
                    </div>
                    <div>
                        <h4>{name}</h4>
                        <h4>{location}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;